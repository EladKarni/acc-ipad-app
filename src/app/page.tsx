"use client";
import IconBad from "@/components/Icons/IconBad";
import IconFast from "@/components/Icons/IconFast";
import IconGood from "@/components/Icons/IconGood";
import Panel from "@/components/Panel/Panel";
import { useColorStore } from "@/stores/colorStore";
import { useTogglesStore } from "@/stores/togglesStore";
import { useWordStore } from "@/stores/wordStore";
import { iconColorStyles } from "@/util/getCurrentColor";
import IconSlow from "@/components/Icons/IconSlow";
import IconCome from "@/components/Icons/IconCome";
import IconGo from "@/components/Icons/IconGo";
import IconThis from "@/components/Icons/IconThis";
import IconThat from "@/components/Icons/IconThat";

export default function Home() {
  const { isWhiteOutline, isBoldOutline, isDesaturateColors, isDarkerColors } =
    useTogglesStore();
  const { currentColor } = useColorStore();
  const { words } = useWordStore();

  const currentModifiedColor = iconColorStyles(
    currentColor,
    isDesaturateColors,
    isDarkerColors
  );
  console.log(currentModifiedColor);
  return (
    <>
      <label
        htmlFor="my-drawer"
        className="absolute top-[45%] left-0 bg-[#EFEFEF] h-[10%] w-20 z-100"
      />
      <main className="grid grid-cols-5 h-screen p-10 ml-16 bg-white gap-14">
        <section className="h-full grid grid-rows-7 gap-10 col-span-4">
          <div className="flex gap-4 items-center w-full rounded-lg h-full bg-[#E2E2E2] card-shadow-off px-8">
            {words.map((word) => {
              return (
                <div
                  key={word + Math.random()}
                  className="text-5xl text-black"
                >{`"${word}"`}</div>
              );
            })}
          </div>
          <div className="row-span-6 flex flex-col justify-center gap-y-10 h-full">
            <div className="flex gap-10">
              <IconGood
                word="Like"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
              <IconBad
                word="Bad"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
              <IconFast
                word="Fast"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
              <IconSlow
                word="Slow"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
            </div>
            <div className="flex gap-10">
              <IconThis
                word="This"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
                iconColor={currentColor}
              />
              <IconThat
                word="That"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
                iconColor={currentColor}
              />
              <Panel word={""} className="bg-[#C7C7C7]" />
              <Panel word={""} className="bg-[#C7C7C7]" />
            </div>
            <div className="flex gap-10">
              <IconCome
                word="Come"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
                iconColor={currentColor}
              />
              <IconGo
                word="Go"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
                iconColor={currentColor}
              />
              <IconCome
                word="Go"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
              <IconCome
                word="Go"
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
            </div>
          </div>
        </section>
        <aside className="grid grid-cols-2 grid-rows-7 gap-10 ">
          <div className="col-span-2 flex gap-10">
            <Panel word={""} className="bg-[#C7C7C7]" />
            <Panel word={""} className="bg-[#C7C7C7]" />
          </div>
          <div className="col-span-2">
            <Panel word={""} className="bg-[#C7C7C7]" />
          </div>
          <div className="col-span-2 row-span-3 flex flex-col gap-16 h-full pt-8">
            <div className="flex gap-10 grow">
              <Panel
                word={"Delete"}
                className="text-3xl bg-[#C7C7C7] font-semibold text-black"
              >
                Delete
              </Panel>
              <Panel
                word={"Clear"}
                className="text-3xl bg-[#C7C7C7] font-semibold text-black"
              >
                Clear
              </Panel>
            </div>
            <div className="flex gap-10 grow">
              <Panel word={""} className="bg-[#C7C7C7]" />
              <Panel word={""} className="bg-[#C7C7C7]" />
            </div>
            <div className="flex gap-10 grow">
              <Panel word={""} className="bg-[#C7C7C7]" />
              <Panel word={""} className="bg-[#C7C7C7]" />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-10">
            <Panel word={""} className="bg-[#C7C7C7]" />
            <Panel word={""} className="bg-[#C7C7C7]" />
          </div>
          <div className="flex  col-span-2 justify-end items-end">
            <div className="flex gap-10 h-1/2 w-full">
              <Panel word={""} className="bg-[#C7C7C7]" />
              <Panel word={""} className="bg-[#C7C7C7]" />
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}
