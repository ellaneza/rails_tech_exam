const isNumber = (array) => {
    return array.every (
        e => {
            return /\d/g.test(e);
        }
    );
}

export const isValidISBN13 = (isbn) => {
    let total = 0;

    const isbnArray = isbn.split('-').join('').split('');

    if (isbnArray.length !== 13 || !isNumber(isbnArray)){
        return false;
    }

    isbnArray.forEach((num, index)=>{
        total = total + (num * (1+(index%2)+(index%2)));
    });

    return total % 10 === 0
}

export const isValidISBN10 = (isbn) => {
    let total = 0;

    const isbnArray = isbn.split('-').join('').split('');

    if (isbnArray.length !== 10 || !isNumber(isbnArray)){
        return false;
    }

    isbnArray.forEach((num, index)=>{
        total = total + (num * (10 - index));
    });

    return total % 11 === 0;
}

export const toIsbn13 = (isbn) => {
    let total = 0;
    if(isValidISBN10(isbn)){ 
        isbn = ('978-' + isbn.slice(0, -2)) 

        let isbnArray = isbn.split('-').join('').split('');
        
        isbnArray.forEach((num, index)=>{
            total = total + (num * (1+(index%2)+(index%2))); 
        })
        
        let lastDigit = 10 - (total % 10);
        return [isbn, lastDigit].join('-');
    } else {
        return 'Invalid ISBN'
    }
}

export const toIsbn10 = (isbn) => {
    let total = 0;
    if (isValidISBN13(isbn)) { 
        isbn = isbn.slice(3, (isbn.length-2)); 

        let isbnArray = isbn.split('-').join('').split('');

        isbnArray.forEach((num, index)=>{
            total = total + (num * (10 - index));
        });

        let lastDigit = 11 - (total % 11);
        if (lastDigit === '10'){
            return [isbn, 'X'].join('-')
        } else {
            return [isbn, lastDigit].join('-')
        }
    } else {
        return 'Invalid ISBN'
    }
}