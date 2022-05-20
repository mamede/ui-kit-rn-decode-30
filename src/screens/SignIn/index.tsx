import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { 
  Box,
  Center,
  Heading,
  Input,
  FormControl,
  Icon,
  Button,
  Checkbox,
  Text,
  VStack,
  HStack,
  WarningOutlineIcon,
  Image,
  Switch,
  useColorMode
} from "native-base";

export function SignIn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center
      height="full"
      _dark={{ bg: "black" }}
      _light={{ bg: "white" }}
    >
      <Image 
        size={150}
        rounded="full"
        source={{ uri: 'https://github.com/mamede.png' }}
        alt="Foto do Usuário"
        resizeMode="contain"
      />

      <VStack width="full" p={10}>
        <Box width="full">
          <Heading 
            color="coolGray.700"
            _dark={{ color: "white" }}
            _light={{ color: "black" }}
          >
            Entrar
          </Heading>

            <FormControl isRequired>
              <FormControl.Label>E-mail</FormControl.Label>
              <Input 
                placeholder='Seu@email.com.br'
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml={2}
                    color="muted.400"
                  />
                }
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
               E-mail inválido
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormControl.Label>Senha</FormControl.Label>
              <Input 
                placeholder='Sua senha'
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="lock" />}
                    size={5}
                    ml={2}
                    color="muted.400"
                  />
                }
              />
            </FormControl>

            <Button
              mt="7"
              colorScheme="purple"
            >
              Entrar
            </Button>

        </Box>
        <HStack mt={5}>
          <Checkbox value="agree">
            <Text ml={3}>
              Concordo com a politica de segurança
            </Text>
          </Checkbox>
        </HStack>

        <HStack alignItems="center" space={4} alignContent="center">
          <Text>Dark</Text>
          <Switch 
            isChecked={colorMode === "light"}
            onToggle={toggleColorMode}
            aria-label={
              colorMode === "light" ? "Troque para o tema escuro" : "Troque para o tema claro"
            }
          />
          <Text>Light</Text>
        </HStack>
      </VStack>
    </Center>
  )
}