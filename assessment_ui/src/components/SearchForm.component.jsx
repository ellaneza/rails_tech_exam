import React, { useState } from 'react'
import { InputGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { isValidISBN10, isValidISBN13, toIsbn13 } from '../lib/ISBNLib';

function SearchForm() {
  const [searchISBN, setSearchISBN] = useState('');
  const [errorText, setErrorText] = useState('');
  let navigate = useNavigate();
  
  const validateISBN = (e) => {
    e.preventDefault();
    let queryISBN = '';
    if ( !( isValidISBN10(searchISBN)) && !(isValidISBN13(searchISBN))){
      setErrorText("Invalid ISBN");
      return;
    }

    if (isValidISBN10(searchISBN)){
      queryISBN = toIsbn13(searchISBN);
    } else {
      queryISBN = searchISBN;
    }

    setErrorText('');
    navigate("/book/" + queryISBN);
  };
  
  return (
    <>
      <Form
        onSubmit={e=>{validateISBN(e)}}
      >
        <Form.Group style={{display: 'flex', flexDirection: 'row'}}>
          <InputGroup>
            <InputGroup.Text>&#128269;</InputGroup.Text>
            <Form.Control 
              type="text" 
              placeholder="Enter an ISBN..."
              onChange={e => {
                setSearchISBN(e.target.value.trim())
              }}
            />
            <Form.Label style={{color: 'red', fontSize: '12px', marginLeft: '10px', width: '100px'}}>{errorText}</Form.Label>
          </InputGroup>
        </Form.Group>
      </Form>
    </>
  );
}

export default SearchForm;