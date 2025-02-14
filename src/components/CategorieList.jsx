import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Wrap, Image, Text, WrapItem } from "@chakra-ui/react";
import axios from "axios";
const CategorieList = ({ tipo }) => {
  const [mascotas, setMascotas] = useState([]);
  const mascotaInfo = async (category) => {
    const url = `https://pets-api-fake.herokuapp.com/${category}/`;
    const { data } = await axios.get(url);
    return data;
  };
  useEffect(() => {
    if (tipo.length > 0) {
      mascotaInfo(tipo).then((data) => setMascotas(data));
    }
  }, [tipo]);

  return (
    <Wrap spacing="40px" justify="center">
      {mascotas.map((mascota) => (
        <WrapItem key={mascota.id}>
          <Link to="">
            <Box maxW="sm" rounded="lg" overflow="hidden">
              <Image
                height={400}
                width={250}
                src={mascota.imageUrl}
                alt={mascota.name}
                opacity={0.6}
                _hover={{
                  opacity: "1",
                }}
              />
              <Text color="brand.white" textStyle="h5" mt={-50} ml={5}>
                {mascota.name}
              </Text>
              <Text color="brand.white" textStyle="h6" ml={5}>
                {mascota.breed}
              </Text>
            </Box>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default CategorieList;
