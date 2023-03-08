<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      * {
        box-sizing: border-box;
      }

      html,
      body {
        height: 100%;
        margin: 0;
      }

      .container {
        margin: 0 auto;
        max-width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        flex-wrap: wrap;
        font-family: cursive;
      }

      .title {
        position: relative;
        flex: 0 1 100%;
        text-align: center;
        letter-spacing: 1rem;
        opacity: 1;
        animation-name: title-slide;
        animation-duration: 0.16s;
        animation-delay: 4s;
        animation-timing-function: linear;
      }

      .title [class*="title__word"] {
        font-size: 9rem;
      }

      .title .title__word--01 {
        animation-name: word-fade;
        animation-timing-function: linear;
        animation-duration: 1.4s;
      }

      .title .title__word--02 {
        font-size: 8rem;
        animation-name: word-fade-02;
        animation-timing-function: linear;
        animation-duration: 1s;
        animation-delay: 1.4s;
      }

      .title .title__word--03 {
        animation-name: word-fade;
        animation-timing-function: linear;
        animation-duration: 1.6s;
        animation-delay: 2.4s;
      }

      .title [class*="title__letter"] {
        position: relative;
      }

      .title .title__letter--01 {
        animation-name: fade-out, hide, letter-up;
        animation-duration: 1.4s, 2.6s, 2.5s;
        animation-delay: 0s, 1.4s, 4s;
        animation-fill-mode: none, none, forwards;
        animation-timing-function: linear;
      }

      .title .title__letter--02 {
        animation-name: fade-out, hide, letter-down;
        animation-duration: 1.4s, 2.6s, 2.5s;
        animation-delay: 0s, 1.4s, 4s;
        animation-fill-mode: none, none, forwards;
        animation-timing-function: linear;
      }

      .title .title__letter--03 {
        animation-name: hide, fade-out-02, hide, show, colorchagne;
        animation-duration: 1.4s, 1s, 1.6s, 0s, 0.83s;
        animation-delay: 0s, 1.4s, 2.4s, 2.4s, 5.6s;
        animation-fill-mode: backwards, none, none, none, forwards;
      }

      .title .title__letter--04 {
        animation-name: hide, fade-out-02, show, letter-up;
        animation-duration: 2.4s, 1.6s, 0s, 2.5s;
        animation-delay: 0s, 2.4s, 2.4s, 4s;
        animation-fill-mode: backwards, none, none, forwards;
        animation-timing-function: linear;
      }

      .title .title__letter--05 {
        animation-name: hide, fade-out-02, show, letter-down;
        animation-duration: 2.4s, 1.6s, 0s, 2.5s;
        animation-delay: 0s, 2.4s, 2.4s, 4s;
        animation-fill-mode: backwards, none, none, forwards;
        animation-timing-function: linear;
      }

      @keyframes title-slide {
        0% {
          left: -200px;
        }

        100% {
          left: 0px;
        }
      }

      @keyframes word-fade {
        0% {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(6);
        }

        100% {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
        }
      }

      @keyframes word-fade-02 {
        0% {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(3);
        }

        100% {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
        }
      }

      @keyframes fade-out {
        0%,
        75% {
          opacity: 1;
        }

        100% {
          opacity: 0.5;
        }
      }

      @keyframes fade-out-02 {
        0%,
        75% {
          opacity: 1;
        }

        100% {
          opacity: 0.05;
        }
      }

      @keyframes hide {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 0;
        }
      }

      @keyframes show {
        0% {
          opacity: 1;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes colorchagne {
        0% {
          color: inherit;
        }

        100% {
          color: darkred;
        }
      }

      @keyframes letter-up {
        0% {
          top: 0;
        }

        100% {
          top: -50px;
          color: darkred;
        }
      }

      @keyframes letter-down {
        0% {
          top: 0;
        }

        100% {
          top: 50px;
          color: darkred;
        }
      }
    </style>
    <style>
      body {
        background: #fff;
        height: 100vh;
        overflow: hidden;
        display: flex;
        font-family: "Anton", sans-serif;
        justify-content: center;
        align-items: center;
        perspective: 1300px;
      }

      div {
        position: absolute;
        transform-style: preserve-3d;
      }

      #chocolate_rains {
        transform: rotateX(-15deg);
      }

      .heart .ring {
        width: 300px;
        height: 300px;
        border-radius: 100%;
        opacity: 0;
        border: 1px solid red;
      }

      .heart .left {
        left: -20px;
        width: 20px;
        height: 20px;
        background: #c80000;
        border-radius: 100%;
        transform-origin: 100% 0;
      }

      .heart .left::before {
        content: "";
        position: absolute;
        top: 10px;
        width: 20px;
        height: 25px;
        background: #c80000;
        border-radius: 0 0 0 100%;
      }

      .heart .right {
        width: 20px;
        height: 20px;
        background: #c80000;
        border-radius: 100%;
        transform-origin: 0 0;
      }

      .heart .right::before {
        content: "";
        position: absolute;
        top: 10px;
        width: 20px;
        height: 25px;
        background: #c80000;
        border-radius: 0 0 100% 0;
      }

      .heart .movable {
        opacity: 0;
      }

      .heart .reverse {
        transform: translateY(70px) rotateZ(180deg);
        opacity: 0.1;
      }

      .heart .reverse .left,
      .heart .reverse .right {
        opacity: 0.5;
      }

      .heart:nth-child(1) {
        transform: translateX(223px) translateZ(732px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(1) .movable {
        -webkit-animation: drop 5000ms -2815ms linear infinite;
        animation: drop 5000ms -2815ms linear infinite;
      }

      .heart:nth-child(1) .ring {
        -webkit-animation: wave 5000ms 1085ms ease-out infinite;
        animation: wave 5000ms 1085ms ease-out infinite;
      }

      .heart:nth-child(1) .inner {
        -webkit-animation: rotation 3954ms linear infinite;
        animation: rotation 3954ms linear infinite;
      }

      .heart:nth-child(2) {
        transform: translateX(-498px) translateZ(85px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(2) .movable {
        -webkit-animation: drop 5000ms -1660ms linear infinite;
        animation: drop 5000ms -1660ms linear infinite;
      }

      .heart:nth-child(2) .ring {
        -webkit-animation: wave 5000ms 2240ms ease-out infinite;
        animation: wave 5000ms 2240ms ease-out infinite;
      }

      .heart:nth-child(2) .inner {
        -webkit-animation: rotation 4224ms linear infinite;
        animation: rotation 4224ms linear infinite;
      }

      .heart:nth-child(3) {
        transform: translateX(26px) translateZ(532px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(3) .movable {
        -webkit-animation: drop 5000ms 1320ms linear infinite;
        animation: drop 5000ms 1320ms linear infinite;
      }

      .heart:nth-child(3) .ring {
        -webkit-animation: wave 5000ms 5220ms ease-out infinite;
        animation: wave 5000ms 5220ms ease-out infinite;
      }

      .heart:nth-child(3) .inner {
        -webkit-animation: rotation 3248ms linear infinite;
        animation: rotation 3248ms linear infinite;
      }

      .heart:nth-child(4) {
        transform: translateX(373px) translateZ(140px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(4) .movable {
        -webkit-animation: drop 5000ms 224ms linear infinite;
        animation: drop 5000ms 224ms linear infinite;
      }

      .heart:nth-child(4) .ring {
        -webkit-animation: wave 5000ms 4124ms ease-out infinite;
        animation: wave 5000ms 4124ms ease-out infinite;
      }

      .heart:nth-child(4) .inner {
        -webkit-animation: rotation 3098ms linear infinite;
        animation: rotation 3098ms linear infinite;
      }

      .heart:nth-child(5) {
        transform: translateX(98px) translateZ(-93px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(5) .movable {
        -webkit-animation: drop 5000ms 680ms linear infinite;
        animation: drop 5000ms 680ms linear infinite;
      }

      .heart:nth-child(5) .ring {
        -webkit-animation: wave 5000ms 4580ms ease-out infinite;
        animation: wave 5000ms 4580ms ease-out infinite;
      }

      .heart:nth-child(5) .inner {
        -webkit-animation: rotation 2360ms linear infinite;
        animation: rotation 2360ms linear infinite;
      }

      .heart:nth-child(6) {
        transform: translateX(241px) translateZ(-555px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(6) .movable {
        -webkit-animation: drop 5000ms 1340ms linear infinite;
        animation: drop 5000ms 1340ms linear infinite;
      }

      .heart:nth-child(6) .ring {
        -webkit-animation: wave 5000ms 5240ms ease-out infinite;
        animation: wave 5000ms 5240ms ease-out infinite;
      }

      .heart:nth-child(6) .inner {
        -webkit-animation: rotation 2792ms linear infinite;
        animation: rotation 2792ms linear infinite;
      }

      .heart:nth-child(7) {
        transform: translateX(-363px) translateZ(125px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(7) .movable {
        -webkit-animation: drop 5000ms 1354ms linear infinite;
        animation: drop 5000ms 1354ms linear infinite;
      }

      .heart:nth-child(7) .ring {
        -webkit-animation: wave 5000ms 5254ms ease-out infinite;
        animation: wave 5000ms 5254ms ease-out infinite;
      }

      .heart:nth-child(7) .inner {
        -webkit-animation: rotation 4406ms linear infinite;
        animation: rotation 4406ms linear infinite;
      }

      .heart:nth-child(8) {
        transform: translateX(-304px) translateZ(579px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(8) .movable {
        -webkit-animation: drop 5000ms 320ms linear infinite;
        animation: drop 5000ms 320ms linear infinite;
      }

      .heart:nth-child(8) .ring {
        -webkit-animation: wave 5000ms 4220ms ease-out infinite;
        animation: wave 5000ms 4220ms ease-out infinite;
      }

      .heart:nth-child(8) .inner {
        -webkit-animation: rotation 2510ms linear infinite;
        animation: rotation 2510ms linear infinite;
      }

      .heart:nth-child(9) {
        transform: translateX(-223px) translateZ(39px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(9) .movable {
        -webkit-animation: drop 5000ms 1707ms linear infinite;
        animation: drop 5000ms 1707ms linear infinite;
      }

      .heart:nth-child(9) .ring {
        -webkit-animation: wave 5000ms 5607ms ease-out infinite;
        animation: wave 5000ms 5607ms ease-out infinite;
      }

      .heart:nth-child(9) .inner {
        -webkit-animation: rotation 3019ms linear infinite;
        animation: rotation 3019ms linear infinite;
      }

      .heart:nth-child(10) {
        transform: translateX(111px) translateZ(-145px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(10) .movable {
        -webkit-animation: drop 5000ms 119ms linear infinite;
        animation: drop 5000ms 119ms linear infinite;
      }

      .heart:nth-child(10) .ring {
        -webkit-animation: wave 5000ms 4019ms ease-out infinite;
        animation: wave 5000ms 4019ms ease-out infinite;
      }

      .heart:nth-child(10) .inner {
        -webkit-animation: rotation 4403ms linear infinite;
        animation: rotation 4403ms linear infinite;
      }

      .heart:nth-child(11) {
        transform: translateX(-166px) translateZ(-15px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(11) .movable {
        -webkit-animation: drop 5000ms -912ms linear infinite;
        animation: drop 5000ms -912ms linear infinite;
      }

      .heart:nth-child(11) .ring {
        -webkit-animation: wave 5000ms 2988ms ease-out infinite;
        animation: wave 5000ms 2988ms ease-out infinite;
      }

      .heart:nth-child(11) .inner {
        -webkit-animation: rotation 2403ms linear infinite;
        animation: rotation 2403ms linear infinite;
      }

      .heart:nth-child(12) {
        transform: translateX(-141px) translateZ(-212px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(12) .movable {
        -webkit-animation: drop 5000ms -881ms linear infinite;
        animation: drop 5000ms -881ms linear infinite;
      }

      .heart:nth-child(12) .ring {
        -webkit-animation: wave 5000ms 3019ms ease-out infinite;
        animation: wave 5000ms 3019ms ease-out infinite;
      }

      .heart:nth-child(12) .inner {
        -webkit-animation: rotation 2745ms linear infinite;
        animation: rotation 2745ms linear infinite;
      }

      .heart:nth-child(13) {
        transform: translateX(282px) translateZ(639px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(13) .movable {
        -webkit-animation: drop 5000ms -2963ms linear infinite;
        animation: drop 5000ms -2963ms linear infinite;
      }

      .heart:nth-child(13) .ring {
        -webkit-animation: wave 5000ms 937ms ease-out infinite;
        animation: wave 5000ms 937ms ease-out infinite;
      }

      .heart:nth-child(13) .inner {
        -webkit-animation: rotation 2464ms linear infinite;
        animation: rotation 2464ms linear infinite;
      }

      .heart:nth-child(14) {
        transform: translateX(276px) translateZ(69px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(14) .movable {
        -webkit-animation: drop 5000ms -2798ms linear infinite;
        animation: drop 5000ms -2798ms linear infinite;
      }

      .heart:nth-child(14) .ring {
        -webkit-animation: wave 5000ms 1102ms ease-out infinite;
        animation: wave 5000ms 1102ms ease-out infinite;
      }

      .heart:nth-child(14) .inner {
        -webkit-animation: rotation 3022ms linear infinite;
        animation: rotation 3022ms linear infinite;
      }

      .heart:nth-child(15) {
        transform: translateX(172px) translateZ(-238px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(15) .movable {
        -webkit-animation: drop 5000ms 1986ms linear infinite;
        animation: drop 5000ms 1986ms linear infinite;
      }

      .heart:nth-child(15) .ring {
        -webkit-animation: wave 5000ms 5886ms ease-out infinite;
        animation: wave 5000ms 5886ms ease-out infinite;
      }

      .heart:nth-child(15) .inner {
        -webkit-animation: rotation 3550ms linear infinite;
        animation: rotation 3550ms linear infinite;
      }

      .heart:nth-child(16) {
        transform: translateX(141px) translateZ(784px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(16) .movable {
        -webkit-animation: drop 5000ms -1163ms linear infinite;
        animation: drop 5000ms -1163ms linear infinite;
      }

      .heart:nth-child(16) .ring {
        -webkit-animation: wave 5000ms 2737ms ease-out infinite;
        animation: wave 5000ms 2737ms ease-out infinite;
      }

      .heart:nth-child(16) .inner {
        -webkit-animation: rotation 2507ms linear infinite;
        animation: rotation 2507ms linear infinite;
      }

      .heart:nth-child(17) {
        transform: translateX(411px) translateZ(-269px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(17) .movable {
        -webkit-animation: drop 5000ms -1487ms linear infinite;
        animation: drop 5000ms -1487ms linear infinite;
      }

      .heart:nth-child(17) .ring {
        -webkit-animation: wave 5000ms 2413ms ease-out infinite;
        animation: wave 5000ms 2413ms ease-out infinite;
      }

      .heart:nth-child(17) .inner {
        -webkit-animation: rotation 4125ms linear infinite;
        animation: rotation 4125ms linear infinite;
      }

      .heart:nth-child(18) {
        transform: translateX(-308px) translateZ(-366px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(18) .movable {
        -webkit-animation: drop 5000ms -2460ms linear infinite;
        animation: drop 5000ms -2460ms linear infinite;
      }

      .heart:nth-child(18) .ring {
        -webkit-animation: wave 5000ms 1440ms ease-out infinite;
        animation: wave 5000ms 1440ms ease-out infinite;
      }

      .heart:nth-child(18) .inner {
        -webkit-animation: rotation 3433ms linear infinite;
        animation: rotation 3433ms linear infinite;
      }

      .heart:nth-child(19) {
        transform: translateX(-475px) translateZ(288px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(19) .movable {
        -webkit-animation: drop 5000ms 1545ms linear infinite;
        animation: drop 5000ms 1545ms linear infinite;
      }

      .heart:nth-child(19) .ring {
        -webkit-animation: wave 5000ms 5445ms ease-out infinite;
        animation: wave 5000ms 5445ms ease-out infinite;
      }

      .heart:nth-child(19) .inner {
        -webkit-animation: rotation 4759ms linear infinite;
        animation: rotation 4759ms linear infinite;
      }

      .heart:nth-child(20) {
        transform: translateX(471px) translateZ(-239px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(20) .movable {
        -webkit-animation: drop 5000ms -2096ms linear infinite;
        animation: drop 5000ms -2096ms linear infinite;
      }

      .heart:nth-child(20) .ring {
        -webkit-animation: wave 5000ms 1804ms ease-out infinite;
        animation: wave 5000ms 1804ms ease-out infinite;
      }

      .heart:nth-child(20) .inner {
        -webkit-animation: rotation 3382ms linear infinite;
        animation: rotation 3382ms linear infinite;
      }

      .heart:nth-child(21) {
        transform: translateX(358px) translateZ(717px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(21) .movable {
        -webkit-animation: drop 5000ms -1396ms linear infinite;
        animation: drop 5000ms -1396ms linear infinite;
      }

      .heart:nth-child(21) .ring {
        -webkit-animation: wave 5000ms 2504ms ease-out infinite;
        animation: wave 5000ms 2504ms ease-out infinite;
      }

      .heart:nth-child(21) .inner {
        -webkit-animation: rotation 2155ms linear infinite;
        animation: rotation 2155ms linear infinite;
      }

      .heart:nth-child(22) {
        transform: translateX(247px) translateZ(-290px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(22) .movable {
        -webkit-animation: drop 5000ms -1683ms linear infinite;
        animation: drop 5000ms -1683ms linear infinite;
      }

      .heart:nth-child(22) .ring {
        -webkit-animation: wave 5000ms 2217ms ease-out infinite;
        animation: wave 5000ms 2217ms ease-out infinite;
      }

      .heart:nth-child(22) .inner {
        -webkit-animation: rotation 2154ms linear infinite;
        animation: rotation 2154ms linear infinite;
      }

      .heart:nth-child(23) {
        transform: translateX(390px) translateZ(220px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(23) .movable {
        -webkit-animation: drop 5000ms -2526ms linear infinite;
        animation: drop 5000ms -2526ms linear infinite;
      }

      .heart:nth-child(23) .ring {
        -webkit-animation: wave 5000ms 1374ms ease-out infinite;
        animation: wave 5000ms 1374ms ease-out infinite;
      }

      .heart:nth-child(23) .inner {
        -webkit-animation: rotation 4265ms linear infinite;
        animation: rotation 4265ms linear infinite;
      }

      .heart:nth-child(24) {
        transform: translateX(24px) translateZ(578px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(24) .movable {
        -webkit-animation: drop 5000ms -2610ms linear infinite;
        animation: drop 5000ms -2610ms linear infinite;
      }

      .heart:nth-child(24) .ring {
        -webkit-animation: wave 5000ms 1290ms ease-out infinite;
        animation: wave 5000ms 1290ms ease-out infinite;
      }

      .heart:nth-child(24) .inner {
        -webkit-animation: rotation 2860ms linear infinite;
        animation: rotation 2860ms linear infinite;
      }

      .heart:nth-child(25) {
        transform: translateX(-68px) translateZ(-588px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(25) .movable {
        -webkit-animation: drop 5000ms -180ms linear infinite;
        animation: drop 5000ms -180ms linear infinite;
      }

      .heart:nth-child(25) .ring {
        -webkit-animation: wave 5000ms 3720ms ease-out infinite;
        animation: wave 5000ms 3720ms ease-out infinite;
      }

      .heart:nth-child(25) .inner {
        -webkit-animation: rotation 4167ms linear infinite;
        animation: rotation 4167ms linear infinite;
      }

      .heart:nth-child(26) {
        transform: translateX(377px) translateZ(-184px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(26) .movable {
        -webkit-animation: drop 5000ms -2529ms linear infinite;
        animation: drop 5000ms -2529ms linear infinite;
      }

      .heart:nth-child(26) .ring {
        -webkit-animation: wave 5000ms 1371ms ease-out infinite;
        animation: wave 5000ms 1371ms ease-out infinite;
      }

      .heart:nth-child(26) .inner {
        -webkit-animation: rotation 4318ms linear infinite;
        animation: rotation 4318ms linear infinite;
      }

      .heart:nth-child(27) {
        transform: translateX(-21px) translateZ(138px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(27) .movable {
        -webkit-animation: drop 5000ms 605ms linear infinite;
        animation: drop 5000ms 605ms linear infinite;
      }

      .heart:nth-child(27) .ring {
        -webkit-animation: wave 5000ms 4505ms ease-out infinite;
        animation: wave 5000ms 4505ms ease-out infinite;
      }

      .heart:nth-child(27) .inner {
        -webkit-animation: rotation 2469ms linear infinite;
        animation: rotation 2469ms linear infinite;
      }

      .heart:nth-child(28) {
        transform: translateX(233px) translateZ(-578px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(28) .movable {
        -webkit-animation: drop 5000ms -1644ms linear infinite;
        animation: drop 5000ms -1644ms linear infinite;
      }

      .heart:nth-child(28) .ring {
        -webkit-animation: wave 5000ms 2256ms ease-out infinite;
        animation: wave 5000ms 2256ms ease-out infinite;
      }

      .heart:nth-child(28) .inner {
        -webkit-animation: rotation 4013ms linear infinite;
        animation: rotation 4013ms linear infinite;
      }

      .heart:nth-child(29) {
        transform: translateX(-418px) translateZ(-102px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(29) .movable {
        -webkit-animation: drop 5000ms 118ms linear infinite;
        animation: drop 5000ms 118ms linear infinite;
      }

      .heart:nth-child(29) .ring {
        -webkit-animation: wave 5000ms 4018ms ease-out infinite;
        animation: wave 5000ms 4018ms ease-out infinite;
      }

      .heart:nth-child(29) .inner {
        -webkit-animation: rotation 3354ms linear infinite;
        animation: rotation 3354ms linear infinite;
      }

      .heart:nth-child(30) {
        transform: translateX(262px) translateZ(554px) scale3d(0.5, 0.5, 0.5);
      }

      .heart:nth-child(30) .movable {
        -webkit-animation: drop 5000ms 134ms linear infinite;
        animation: drop 5000ms 134ms linear infinite;
      }

      .heart:nth-child(30) .ring {
        -webkit-animation: wave 5000ms 4034ms ease-out infinite;
        animation: wave 5000ms 4034ms ease-out infinite;
      }

      .heart:nth-child(30) .inner {
        -webkit-animation: rotation 3827ms linear infinite;
        animation: rotation 3827ms linear infinite;
      }

      @-webkit-keyframes blur {
        0% {
          filter: blur(20px) grayscale(150%);
        }

        100% {
          filter: blur(10px) grayscale(50%);
        }
      }

      @keyframes blur {
        0% {
          filter: blur(20px) grayscale(150%);
        }

        100% {
          filter: blur(10px) grayscale(50%);
        }
      }

      @-webkit-keyframes rotation {
        0% {
          transform: rotateY(0deg);
        }

        100% {
          transform: rotateY(360deg);
        }
      }

      @keyframes rotation {
        0% {
          transform: rotateY(0deg);
        }

        100% {
          transform: rotateY(360deg);
        }
      }

      @-webkit-keyframes drop {
        0% {
          transform: translateY(-1000px);
          opacity: 0;
        }

        80% {
          transform: translateY(0);
          opacity: 3;
        }

        100% {
          transform: translateY(-40px);
          opacity: 0;
        }
      }

      @keyframes drop {
        0% {
          transform: translateY(-1000px);
          opacity: 0;
        }

        80% {
          transform: translateY(0);
          opacity: 3;
        }

        100% {
          transform: translateY(-40px);
          opacity: 0;
        }
      }

      @-webkit-keyframes wave {
        0% {
          transform: translate(-50%, -50%) rotateX(90deg) scale(0)
            translateZ(-37px);
          opacity: 2;
        }

        100% {
          transform: translate(-50%, -50%) rotateX(90deg) scale(2)
            translateZ(-37px);
          opacity: 0;
        }
      }

      @keyframes wave {
        0% {
          transform: translate(-50%, -50%) rotateX(90deg) scale(0)
            translateZ(-37px);
          opacity: 2;
        }

        100% {
          transform: translate(-50%, -50%) rotateX(90deg) scale(2)
            translateZ(-37px);
          opacity: 0;
        }
      }

      @-webkit-keyframes wing {
        0% {
          transform: rotateY(70deg);
        }

        100% {
          transform: rotateY(0deg);
        }
      }

      @keyframes wing {
        0% {
          transform: rotateY(70deg);
        }

        100% {
          transform: rotateY(0deg);
        }
      }
    </style>
  </head>

  <body>
    <div hidden id="chocolate_rains">
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="heart">
        <div class="ring"></div>
        <div class="inner">
          <div class="regular">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
          <div class="reverse">
            <div class="movable">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <p hidden style="font-size: 7rem; margin: 0" id="hide_2">Happy</p>
      <div class="title">
        <span class="title__word--01"
          ><span class="title__letter--01">W</span>
          <span class="title__letter--02">o</span></span
        >
        <span class="title__word--02"
          ><span class="title__letter--03">m</span></span
        >
        <span class="title__word--03"
          ><span class="title__letter--04">e</span>
          <span class="title__letter--05">n's</span>
        </span>
      </div>
      <p
        hidden
        id="hide_3"
        style="
          margin: 0;
          font-size: 7rem;
          text-align: right;
          /* display: block; */
          margin-left: 75%;
        "
      >
        Day ❤️
      </p>
    </div>

    <script>
      setTimeout(() => {
        document.querySelector("#chocolate_rains").hidden = false;
        document.querySelector("#hide_2").hidden = false;
        document.querySelector("#hide_3").hidden = false;

        document.querySelector("body").style.backgroundColor = "#fff";
      }, 6000);
    </script>
  </body>
</html>
