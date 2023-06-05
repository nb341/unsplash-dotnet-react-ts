import React, { ChangeEvent, ChangeEventHandler, useReducer } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  chakra,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface PhotoFrom {
  label: string;
  link: string;
}

const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [label, setLabel] = useState('');
  // const [photoUrl, setPhotoUrl] = useState('');
  const initialValues: PhotoFrom = {
    label: "",
    link: "",
  };
  const [formValues, setFormValues] = useReducer(
    (curVals: any, newVals: any) => ({ ...curVals, ...newVals }),
    initialValues
  );
  const { link, label } = formValues;

  const onChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ [name]: value });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // console.log(formValues);
    // const data = new FormData(e.currentTarget);
    // for (const value of data) {
    //   console.log(value);
    // }

    fetch("https://localhost:7170/api/PhotoItem", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:3000",
      },
      mode: "cors", // no-cors, *cors, same-origin
      method: "POST",
      body: JSON.stringify(formValues),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Button
        onClick={onOpen}
        bg={"rgba(61, 180, 109, 1)"}
        color={"rgba(255, 255, 255, 1)"}
        boxShadow={"0px 1px 6px rgba(0, 0, 0, 0.1)"}
        fontSize={"16px"}
        colorScheme={"green"}
        fontWeight={"700"}
        height={"55px"}
        width={"137px"}
      >
        Add a photo
      </Button>
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent ml={"32px"} height={"367px"} mr={"35px"}>
          <chakra.form onSubmit={onSubmit}>
            <ModalHeader
              fontSize={"24px"}
              lineHeight={"33px"}
              color={"rgba(51, 51, 51, 1)"}
            >
              Add a new photo
            </ModalHeader>

            <ModalBody>
              <VStack>
                <FormControl>
                  <FormLabel
                    color={"rgba(79, 79, 79, 1)"}
                    fontSize={"14px"}
                    fontWeight="500"
                    lineHeight={"19px"}
                  >
                    Label
                  </FormLabel>
                  <Input
                    name="label"
                    type={"text"}
                    value={label}
                    onChange={onChange}
                    border="1px solid #4F4F4F"
                    borderRadius="12px"
                    h="55px"
                    filter="drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1))"
                    placeholder={"Suspendisse elit massa"}
                    _placeholder={{
                      color: "rgba(189, 189, 189, 1)",
                      fontFamily: "Noto Sans",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "19px",
                    }}
                    _focus={{
                      border: "0.5px solid rgba(189, 189, 189, 1)",
                      boxShadow: "md",
                    }}
                    // onChange={(e) => {
                    //   setLabel(e.target.value);
                    // }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    color={"rgba(79, 79, 79, 1)"}
                    fontSize={"14px"}
                    fontWeight="500"
                    lineHeight={"19px"}
                  >
                    Photo URL
                  </FormLabel>
                  <Input
                    name="link"
                    type={"text"}
                    value={link}
                    onChange={onChange}
                    border="1px solid #4F4F4F"
                    borderRadius="12px"
                    h="55px"
                    placeholder={
                      "https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
                    }
                    _placeholder={{
                      color: "rgba(189, 189, 189, 1)",
                      fontFamily: "Noto Sans",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "19px",
                    }}
                    _focus={{
                      border: "0.5px solid rgba(189, 189, 189, 1)",
                      boxShadow: "md",
                    }}
                    // onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button
                color={"rgba(189, 189, 189, 1)"}
                fontSize={"16px"}
                fontWeight={"500"}
                variant={"ghost"}
                colorScheme="gray"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                color={"rgba(255, 255, 255, 1)"}
                bg={"rgba(61, 180, 109, 1)"}
                boxShadow={"0px 1px 6px rgba(0, 0, 0, 0.1)"}
                colorScheme="green"
                type="submit"
              >
                Submit
              </Button>
            </ModalFooter>
          </chakra.form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
