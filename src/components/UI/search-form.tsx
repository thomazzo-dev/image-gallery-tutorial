"use client"
import { scrollToTop } from "@/utils/util-functions";
import { useRef, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { redirect, RedirectType } from 'next/navigation'
import { useOnClickOutside } from 'usehooks-ts'


export default function SearchForm() {
  const [keyword, setKeyword] = useState<string>("");
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement>(null!)

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
    setKeyword("");
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
    scrollToTop();
    redirect(`/s/photo/${keyword}`, RedirectType.push);
  };
  
   useOnClickOutside<HTMLDivElement>(formRef, () => setIsOpened(false))

  return (
    <div className="relative inline-block h-full w-full max-w-[60rem] text-neutral" ref={formRef}>
      <form
        className="form-control relative flex h-full w-full items-center rounded-3xl bg-neutral-content"
        id="search-form"
        onSubmit={submitHandler}
      >
        {isOpened ? (
          <>
            <input
              type="text"
              placeholder="Search"
              onChange={changeHandler}
              className="input input-info h-full w-full rounded-3xl bg-transparent px-[19px] "
            />

            <button
              className="z-1 icon-container btn-neutral   absolute right-2 top-2"
              type="reset"
              onClick={handleReset}
            >

              <XMarkIcon />
            </button>
          </>
        ) : (
          <div
            className="absolute flex h-full w-full items-center gap-1 px-[19px] "
            onClick={() => setIsOpened(!isOpened)}
          >
            <button className="icon-container">
              <MagnifyingGlassIcon />
            </button>
            <p>Search</p>
          </div>
        )}
      </form>
    </div>
  )
}
