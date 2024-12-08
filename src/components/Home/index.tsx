import React, { useEffect, useState } from "react";
import "./index.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Buttons from "./Buttons";
import Confetti from "react-confetti";
import GoodChoice from "../GoodChoice";
import { motion } from "framer-motion";
import Computer from "../Computer";
import ReactLogo from "../ReactLogo";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getQuestion } from "../../store/reducers/question";

function Home() {
  const dispatch = useAppDispatch();

  const [backgroundVideo, setBackgroundVideo] = useState("/assets/nuage.mp4");
  const [message, setMessage] = useState("");
  const [showComputer, setShowComputer] = useState(false);
  const [isYesClicked, setIsYesClicked] = useState(false); 
  const [isNoClicked, setIsNoClicked] = useState(false);
  const { data, loading } = useAppSelector((state) => state.question);


  useEffect(() => {
    dispatch(getQuestion());
  }, [dispatch]);


  if (loading) {
    return <div>Loading...</div>;
  }


  const playSound = (type: "yes" | "no") => {
    const audio = new Audio(
      type === "yes" ? "/assets/positive.mp3" : "/assets/negative.mp3"
    );
    audio.play();
  };

  const handleClick = (type: "yes" | "no") => {
    setShowComputer(true);
    setMessage(data.answers[type]);

    if (type === "yes") {
      setIsYesClicked(true);
      setIsNoClicked(false);
    } else {
      setIsNoClicked(true);
      setIsYesClicked(false);
    }

    playSound(type);
    setBackgroundVideo("/assets/nuage.mp4");

  };

  const reset = () => {
    setShowComputer(true);
    setIsYesClicked(false);
    setIsNoClicked(false);
    setMessage("");
    setBackgroundVideo("/assets/nuage.mp4");

  };

  const handleMouseEnterYes = () => {
    setBackgroundVideo("/assets/yes.mp4");
  };

  const handleMouseEnterNo = () => {
    setBackgroundVideo("/assets/meteorite.mp4");
  };

  const handleMouseLeave = () => {
    setBackgroundVideo("/assets/nuage.mp4");
  };

  return (
    <div className="home">
      <div className="title">
        <h1>{data.question}</h1>
      </div>

      <video
        autoPlay
        loop
        muted
        className="home__background"
        key={backgroundVideo}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos.
      </video>

      <Canvas className="home__canvas" camera={{ position: [0, 0, 290], fov: 25 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />

        {!showComputer ? (
          <ReactLogo />
        ) : (
          <Computer message={message} />
        )}

        <OrbitControls
          autoRotate
          autoRotateSpeed={7}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>

      {!isYesClicked && !isNoClicked ? (
        <Buttons
          onYesClick={() => handleClick("yes")}
          onNoClick={() => handleClick("no")}
          onYesHover={handleMouseEnterYes}
          onNoHover={handleMouseEnterNo}
          onMouseLeave={handleMouseLeave}
        />) : (

        <div className="buttonsx">
          <div className="buttons-containerx">
            <button onClick={reset} className="buttonx">
              Restart
            </button>
          </div>
        </div>

      )
      }




      {isYesClicked && <Confetti />}

      {isYesClicked && <GoodChoice />}

      {/* {isNoClicked && (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="exploding-button"
        >
          No
        </motion.div>
      )} */}

    </div>
  );
}

export default Home;
