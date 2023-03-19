# authors

authors = [
    {
        first_name: 'Joel',
        middle_name: nil,
        last_name: 'Hartse'
    },
    {
        first_name: 'Hannah',
        middle_name: 'P.',
        last_name: 'Templer'
    },
    {
        first_name: 'Marguerite',
        middle_name: 'Z.',
        last_name: 'Duras'
    },
    {
        first_name: 'Kingsley',
        middle_name: nil,
        last_name: 'Amis'
    },
    {
        first_name: 'Fannie',
        middle_name: 'Peters',
        last_name: 'Flagg'
    },
    {
        first_name: 'Camille',
        middle_name: 'Byron',
        last_name: 'Paglia'
    },
    {
        first_name: 'Rainer',
        middle_name: 'Steel',
        last_name: 'Rilke'
    }
]
Author.create(authors)

# publishers

publishers = [
    {
        name: 'Paste Magazine',
    },
    {
        name: 'Publishers Weekly',
    },
    {
        name: 'Graywolf Press',
    },
    {
        name: 'McSweeney\'s',
    }
]

Publisher.create(publishers)

# books

books = [
    {
        title: 'American Elf',
        authors: [
            Author.where(first_name: 'Joel', last_name: 'Hartse').take!,
            Author.where(first_name: 'Hannah', middle_name: 'P.', last_name: 'Templer').take!,
            Author.where(first_name: 'Marguerite', middle_name: 'Z.', last_name: 'Duras').take!
        ],
        publisher: Publisher.find_by(name: 'Paste Magazine'),
        isbn_13: '978-1-891830-85-3',
        publication_year: '2004',
        edition: 'Book 2',
        list_price: '1000'
    },
    {
        title: 'Cosmoknights',
        authors: [
            Author.where(first_name: 'Kingsley', last_name: 'Amis').take!
        ],
        publisher: Publisher.find_by(name: 'Publishers Weekly'),
        isbn_13: '978-1-60309-454-2',
        publication_year: '2019',
        edition: 'Book 1',
        list_price: '2000'
    },    
    {
        title: 'Essex County',
        authors: [
            Author.where(first_name: 'Kingsley', last_name: 'Amis').take!
        ],
        publisher: Publisher.find_by(name: 'Graywolf Press'),
        isbn_13: '978-1-60309-038-4',
        publication_year: '1990',
        edition: '',
        list_price: '500'
    },    
    {
        title: 'Hey, Mister (Vol 1)',
        authors: [
            Author.where(first_name: 'Hannah', middle_name: 'P.', last_name: 'Templer').take!,
            Author.where(first_name: 'Fannie', middle_name: 'Peters', last_name: 'Flagg').take!,
            Author.where(first_name: 'Camille', middle_name: 'Byron', last_name: 'Paglia').take!
            
        ],
        publisher: Publisher.find_by(name: 'Graywolf Press'),
        isbn_13: '978-1-891830-02-0',
        publication_year: '2000',
        edition: 'After School Special',
        list_price: '1200'
    },    
    {
        title: 'The Underwater Welder',
        authors: [
            Author.where(first_name: 'Rainer', middle_name: 'Steel', last_name: 'Rilke').take!  
        ],
        publisher: Publisher.find_by(name: 'McSweeney\'s'),
        isbn_13: '978-1-60309-398-9',
        publication_year: '2022',
        edition: 'Book 2',
        list_price: '1000'
    },
]

Book.create(books)