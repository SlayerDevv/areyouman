"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  const handlemove = () => { 
    const button = document.getElementById('nobtn') as HTMLButtonElement
    const x = Math.floor(Math.random() * button.offsetLeft + button.offsetWidth)
    const y = Math.floor(Math.random() * button.offsetTop  + button.offsetHeight)
    
    button.style.left = `${x}px`
    button.style.top = `${y}px`
  }

  const yes = () => {
    const button = document.getElementById('yesbtn') as HTMLButtonElement
    const txt = document.getElementById('txt') as HTMLSpanElement
    if (button.innerText === "Gay ta3 zebi"){
      return;
    }
    button.innerText = "Gay ta3 zebi"
    if (txt.innerText === "Gay ta3 zebi"){
      return;
    }
    txt.innerHTML = '<video loop autoPlay src="/hhh.mp4" height={100} width={100}>' + '</video>'
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex space-x-5">
      <span className="text-xl " ><h1 id="txt">Are You Gay ?</h1></span>
      <button className="bg-blue-600 w-[60px] h-[60px] rounded-xl" id="yesbtn" onClick={() => yes()}>Yes</button>
      <button className="absolute bg-blue-600  rounded-xl right-[500px] w-[60px] h-[60px] " id="nobtn" onClick={() => handlemove()}>No</button>
      </div>
    </div>
  );
}
