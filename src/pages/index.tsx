import { useRef, useState } from "react";
import * as S from "./styles";
import ReactECharts from "echarts-for-react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";
import Button from "@mui/material/Button";
import { IComponent } from "../Interfaces/Component";
import { AiOutlinePlus, AiOutlineCloseCircle } from "react-icons/ai";
import { BsPrinter } from "react-icons/bs";
import {
  Box,
  Modal,
  IconButton,
  TextField,
  Switch,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Upload } from "../components/Upload";
import { FileProps } from "../Interfaces/Upload";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { PaperComponent } from "../components/PaperComponent";
import { FolhaA4 } from "../components/FolhaA4";
import { ModalProps } from "./components/ModalProps";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

import Draggable from "react-draggable";

// type EChartsOption = echarts.EChartsOption;

// var chartDom = document.getElementById('main')!;
// var myChart = echarts.init(chartDom);
// var option: EChartsOption;
const pizza = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

const bar = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};

function App() {
  const [selected, setSelected] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState<FileProps[]>([]);
  const [objFinal, setObjFinal] = useState<IComponent[]>([]);
  const [objComponent, setObjectComponent] = useState<IComponent>({
    id: 0,
    largura: "",
    altura: "",
    borda: true,
    larguraBorda: "",
    tituloComponente: "",
    imagem: "",
    grafico: true,
  });

  const componentRef = useRef();
  console.log(objComponent);

  const handleSave = () => {
    objComponent.imagem = files[0].conteudoBase64 as string;

    const objComponentCopy = { ...objComponent };
    objFinal.push(objComponentCopy);
    setObjFinal(objFinal);

    console.log(objFinal);
  };

  return (
    <S.App>
      <S.Container>
        <Button
          startIcon={<AiOutlinePlus />}
          variant="outlined"
          onClick={() => setOpenModal(true)}
        >
          Adicionar
        </Button>

        <ReactToPrint
          trigger={() => (
            <Button startIcon={<BsPrinter />} variant="contained">
              Imprimir
            </Button>
          )}
          content={() => componentRef.current as any}
        ></ReactToPrint>
      </S.Container>

      <S.Main>
        <S.FolhaA4 ref={componentRef as any}>
          {objFinal.map((obj) => (
            <div>
              <Draggable
                bounds={{ top: -2, left: -2, right: 725, bottom: 600 }}
              >
                <div>
                  <PaperComponent
                    width={`${obj.largura}px`}
                    border={obj.borda}
                    borderWidth={`${obj.larguraBorda}px`}
                    height={`${obj.altura}px`}
                    title={obj.tituloComponente}
                  >
                    <S.StyledImg src={obj.imagem} alt={obj.tituloComponente} />
                  </PaperComponent>
                </div>
              </Draggable>
              <Draggable
                bounds={{ top: -2, left: -230, right: 230, bottom: 600 }}
              >
                <div>
                  <PaperComponent
                    width={`${obj.largura}px`}
                    border={obj.borda}
                    borderWidth={`${obj.larguraBorda}px`}
                    height={`${obj.altura}px`}
                    title={obj.tituloComponente}
                  >
                    <ReactECharts
                      option={obj.grafico ? pizza : bar}
                      notMerge={true}
                      lazyUpdate={true}
                      theme={"theme_name"}
                    />
                  </PaperComponent>
                </div>
              </Draggable>
            </div>
          ))}
        </S.FolhaA4>
      </S.Main>

      <ModalProps
        open={openModal}
        close={() => setOpenModal(false)}
        objComponent={objComponent}
        setObjectComponent={setObjectComponent}
        handleSave={handleSave}
        files={files}
        setFiles={setFiles}
        graficSelected={selected}
        setGraficSelected={setSelected}
      />
    </S.App>
  );
}

export default App;
