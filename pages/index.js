import React, { useState, useEffect } from "react";
import Form from "../components/Form.jsx";

function IndexPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('')

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    country: "",
  });

  useEffect(() => {
    localStorage.setItem("name", formData.name)
  }, [formData.name])

  const [timeout, setTimeout] = useState();
  const [personalStatement, setPersonalStatement] = useState();

  const postData = (data) => {
    setIsLoading(true)
    fetch("/api/parrot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        setResponseMessage(response.message)
        setTimeout(response.timeout);
        setPersonalStatement(response.name ? `Success! The following response has been sent: Hi my name is ${response.name}. I am originally from ${response.country}. ${response.description}` : null)
        setIsLoading(false)
      })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData(formData);
  };

  return (
    <main>
      <h1 className={"test"}>Meredith's React take-home</h1>
      <Form onChange={handleChange} onSubmit={handleSubmit} />
      {isLoading && <div>Loading...</div>}
      {personalStatement && <h3>{personalStatement}</h3>}
      {responseMessage && <h3>{responseMessage}</h3>}
      {timeout && <h5>It took {timeout}ms to deliver this.</h5>}
    </main>
  );
}

export default IndexPage;
