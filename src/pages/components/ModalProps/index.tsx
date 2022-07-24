import {
  Accordion,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  useFormControl,
} from "@mui/material";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import * as S from "./styles";
import { AiOutlinePlus, AiOutlineCloseCircle } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { IComponent } from "../../../Interfaces/Component";
import { FileProps } from "../../../Interfaces/Upload";
import { Upload } from "../../../components/Upload";
import { useState } from "react";
import { Grafico } from "../../../components/Grafico";
import React from "react";

interface ModalProps {
  open: boolean;
  close: () => void;
  objComponent: IComponent;
  setObjectComponent: React.Dispatch<React.SetStateAction<IComponent>>;
  handleSave: () => void;
  files: FileProps[];
  setFiles: React.Dispatch<React.SetStateAction<FileProps[]>>;
  graficSelected: boolean;
  setGraficSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalProps = ({
  open,
  close,
  objComponent,
  setObjectComponent,
  handleSave,
  files,
  setFiles,
  graficSelected,
  setGraficSelected,
}: ModalProps) => {
  
  const disableButton = () => {
    if(
      !objComponent.altura ||
      !objComponent.largura ||
      !objComponent.tituloComponente
    )  {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Modal open={open} onClose={close}>
      <S.ModalContainer>
        <S.ModalBody>
          <S.ModalHeader>
            <h2>Novo Componente</h2>
            <IconButton onClick={close}>
              <AiOutlineCloseCircle size={26} />
            </IconButton>
          </S.ModalHeader>

          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSLine />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Imagem</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Upload
                  maxSize={5240000}
                  accept={".pdf"}
                  setFiles={setFiles}
                  files={files}
                  title={"Adicionar a imagem do produto"}
                />
              </div>
              <S.ComponentAreaInput>
                <TextField
                  label="Título do componente"
                  variant="outlined"
                  onChange={(e) =>
                    setObjectComponent({
                      ...objComponent,
                      tituloComponente: e.target.value,
                    })
                  }
                />
                
                <TextField
                  label="Altura"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">px</InputAdornment>
                    ),
                  }}
                  onChange={(e) => {
                    setObjectComponent({
                      ...objComponent,
                      altura: e.target.value,
                    });
                  }}
                />
                <TextField
                  label="Largura"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">px</InputAdornment>
                    ),
                  }}
                  onChange={(e) => {
                    setObjectComponent({
                      ...objComponent,
                      largura: e.target.value,
                    });
                  }}
                />
              </S.ComponentAreaInput>

              <S.ComponentAreaInput>
                <div>
                  <FormControl>
                    <FormLabel>Utilizar borda?</FormLabel>
                    <RadioGroup>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={objComponent.borda}
                            onChange={() =>
                              setObjectComponent({
                                ...objComponent,
                                borda: true,
                              })
                            }
                          />
                        }
                        label="Sim"
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={!objComponent.borda}
                            onChange={() =>
                              setObjectComponent({
                                ...objComponent,
                                borda: false,
                              })
                            }
                          />
                        }
                        label="Não"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <TextField
                  label="Largura da borda"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">px</InputAdornment>
                    ),
                  }}
                  disabled={!objComponent.borda}
                  onChange={(e) =>
                    setObjectComponent({
                      ...objComponent,
                      larguraBorda: e.target.value,
                    })
                  }
                />
              </S.ComponentAreaInput>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSLine />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Grafico</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <FormLabel>Selecione o grafico</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={graficSelected}
                        onChange={() => {
                          setGraficSelected(true);

                          setObjectComponent({
                            ...objComponent,
                            grafico: true,
                          });
                        }}
                      />
                    }
                    label="Pizza"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={!graficSelected}
                        onChange={() => {
                          setGraficSelected(false);

                          setObjectComponent({
                            ...objComponent,
                            grafico: false,
                          });
                        }}
                      />
                    }
                    label="Bar"
                  />
                </RadioGroup>
              </FormControl>

              <S.ComponentAreaInput>
                <TextField
                  label="Título do componente"
                  variant="outlined"
                  onChange={(e) =>
                    setObjectComponent({
                      ...objComponent,
                      tituloComponente: e.target.value,
                    })
                  }
                />
                <TextField
                  label="Altura"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">px</InputAdornment>
                    ),
                  }}
                  onChange={(e) => {
                    setObjectComponent({
                      ...objComponent,
                      altura: e.target.value,
                    });
                  }}
                />
                <TextField
                  label="Largura"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">px</InputAdornment>
                    ),
                  }}
                  onChange={(e) => {
                    setObjectComponent({
                      ...objComponent,
                      largura: e.target.value,
                    });
                  }}
                />
              </S.ComponentAreaInput>

              <S.ComponentAreaInput>
                <div>
                  <FormControl>
                    <FormLabel>Utilizar borda?</FormLabel>
                    <RadioGroup>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={objComponent.borda}
                            onChange={() =>
                              setObjectComponent({
                                ...objComponent,
                                borda: true,
                              })
                            }
                          />
                        }
                        label="Sim"
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={!objComponent.borda}
                            onChange={() =>
                              setObjectComponent({
                                ...objComponent,
                                borda: false,
                              })
                            }
                          />
                        }
                        label="Não"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <TextField
                  label="Largura da borda"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">px</InputAdornment>
                    ),
                  }}
                  disabled={!objComponent.borda}
                  onChange={(e) =>
                    setObjectComponent({
                      ...objComponent,
                      larguraBorda: e.target.value,
                    })
                  }
                />
              </S.ComponentAreaInput>
              <Grafico route={graficSelected} setRoute={setGraficSelected} />
            </AccordionDetails>
          </Accordion>

          <Button
            sx={{ margin: "20px 0" }}
            variant="contained"
            disabled={disableButton()}
            onClick={() => handleSave()}
          >
            Salvar
          </Button>
        </S.ModalBody>
      </S.ModalContainer>
    </Modal>
  );
};
