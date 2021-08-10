import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  HStack,
  Radio,
  RadioGroup,
  Flex,
  Heading,
  VStack,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

import axios from "axios";
import { useHistory } from "react-router-dom";

const AddPets = () => {
  const history = useHistory();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const url = `https://pets-api-fake.herokuapp.com/${form.category}/`;
    const { data } = await axios.post(url, form);
    console.log(data);
    history.push(`/`);
  };
  return (
    <Flex direction="column" mt="2" alignItems="center">
      <Heading mt="5" mb="5">
        Adopta una adorable mascota
      </Heading>
      <Text mb="5" textStyle="h3">
        Agregar mascotas
      </Text>
      <VStack spacing={4} align="center">
        <FormControl id="photo" isRequired>
          <FormLabel>Imagen</FormLabel>
          <Input
            placeholder="Imagen"
            name="imageUrl"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>

        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>

        <FormControl id="first-name" isRequired>
          <FormLabel>Breed</FormLabel>
          <Input
            placeholder="breed"
            name="breed"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>

        <FormControl as="fieldset" alignItems="center">
          <FormLabel as="legend">Categoria</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <HStack spacing="24px">
              <Radio
                value="dogs"
                name="category"
                onChange={(e) => handleChange(e)}
              >
                Dogs
              </Radio>
              <Radio
                value="cats"
                name="category"
                onChange={(e) => handleChange(e)}
              >
                Cats
              </Radio>
            </HStack>
          </RadioGroup>
          <Button onClick={handleSubmit} colorScheme="blue">Submit</Button>
          <FormHelperText>Select only </FormHelperText>
        </FormControl>
       
      </VStack>
    </Flex>
  );
};

export default AddPets;
