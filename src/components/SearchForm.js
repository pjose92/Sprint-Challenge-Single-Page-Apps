import React, { useState } from "react";
import { Form, FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";

 function SearchForm({ handleSearch }) {
   const[term, setTerm] = useState("");

   const onFormSubmit = e => {
     e.preventDefault();
     handleSearch(term);
   };

   const onFormReset = e => {
     e.preventDefault();
     setTerm("");
     handleSearch("");
   };

   const onTermChange = e => setTerm(e.target.value);

  return (
   <section className="search form">
     <Form onSubmit={onFormSubmit} onReset={onFormReset}>
       <FormGroup>
         <Label htmlFor="term">Search: </Label>
         <Input 
          type="text"
          name="text"
          placeholder="search"
          onChange={onTermChange}
          value={term}
         ></Input>
       </FormGroup>
       <ButtonGroup className="float-right">
         <Button type="submit" color="primary">Search</Button>
         <Button type="reset">Clear</Button>
       </ButtonGroup>
     </Form>
   </section>
  );

 }
 
 


export default SearchForm;