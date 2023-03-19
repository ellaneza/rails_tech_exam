class Api::V1::BooksController < ApplicationController
    def book_detail
        isbn = params["isbn"]
		json_result = {}
		if IsbnHelper.isValidISBN13?(isbn)
			query_string = isbn
		elsif IsbnHelper.isValidISBN10?(isbn)
			query_string =	IsbnHelper.convert(isbn)
		else
			json_result = {"message": "Invalid ISBN", "status": :not_ok}
		end

		if ( IsbnHelper.isValidISBN13?(isbn) || IsbnHelper.isValidISBN10?(isbn) )
			@book = Book.find_by(isbn_13: query_string)
			if @book
				json_result = {
				  "book": @book,
				  "authors": @book.author.map(&:full_name).join(","),
				  "publisher": @book.publisher.name,
				  "status": :ok
				}		
			else
				json_result = {"message": "no record matching ISBN #{query_string}", "status": :not_found}
			end
		end
		render json: json_result
    end

	def switch_isbn
		inverted_isbn = IsbnHelper.convert(params["isbn"])
		render json: {
			"isbn": inverted_isbn,
			"status": :ok
		}
	end
end
