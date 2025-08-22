"use client"

import { scrollToTop } from '@/utils/util-functions'
import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { CameraIcon, UsersIcon, PhotoIcon } from '@heroicons/react/16/solid'
import { useSelectedLayoutSegment } from 'next/navigation'

const Tab = ({ tabName, isLagerThanMd, isMached, icon }: {
    tabName: string,
    isLagerThanMd: boolean,
    isMached: boolean,
    icon: React.ReactNode
}) => {
    const buttonStyle = clsx("flex",
        "h-full",
        "items-center",
        "justify-start",
        "gap-2",
        "p-3",
        isMached && "border-b-2 border-slate-600")

    const iconStyle = clsx("flex", "h-6", "w-6", isMached ? "text-neutral" : "text-base-300")

    const tabStyle = clsx(isMached ? "text-neutral" : "text-base-300", "font-semibold", "text-sm", "md:text-base","captialize")
    return (
        <button
            className={buttonStyle}

        >
            {isLagerThanMd ? (
                <div className={iconStyle}>
                    {icon}
                </div>
            ) : (
                <></>
            )
            }

            <p className={tabStyle}>
                {tabName}
            </p>
        </button >
    )
}



export default function SearchSegment({ keyword }: { keyword: string }) {
    const isLagerThanMd = useMediaQuery('(min-width: 900px)')
    const segment = useSelectedLayoutSegment()
    console.log("segment", segment)
    const matchPhotoTab = segment === null
    const matchCollectionTab = segment === "collection"
    const matchUserTab = segment === "user"
    return (    
        <>
            <header className="sticky top-14 z-[30] flex h-12 w-full  items-center justify-between bg-white px-2 shadow-sm">
                <section className="flex h-full w-1/4  max-w-[360px] items-center  gap-3 font-semibold *:text-sm	   *:text-slate-500 *:md:text-base">
                    <Link href={`/s/${keyword}`} onClick={() => scrollToTop()}>
                        <Tab tabName={"photo"} isMached={matchPhotoTab} isLagerThanMd={isLagerThanMd} icon={<CameraIcon/>}/>
                    </Link>
                    <Link href={`/s/${keyword}/collection`} onClick={() => scrollToTop()}>
                         <Tab tabName={"collection"} isMached={matchCollectionTab} isLagerThanMd={isLagerThanMd} icon={<PhotoIcon/>}/>
                    </Link>
                    <Link href={`/s/${keyword}/user`} onClick={() => scrollToTop()}>
                        <Tab tabName={"user"} isMached={matchUserTab} isLagerThanMd={isLagerThanMd} icon={<UsersIcon/>}/>
                    </Link>
                </section>
                {/*  {matchPhotoTab && largerThanMd && (
          <div className="flex items-center justify-start gap-4 pr-4 font-semibold *:text-slate-400">
            {(queryParams.isRelevant === false ||
              queryParams.orientation !== undefined) && (
              <div
                role="button"
                onClick={resetFilter}
                className="btn  btn-xs border bg-white sm:btn-sm  "
              >
                reset
              </div>
            )}

            <div className="dropdown rounded-lg border">
              <div
                tabIndex={0}
                role="button"
                className="btn  btn-xs bg-white  sm:btn-sm  "
              >
                Orientation
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-2 rounded-box border bg-base-100 p-2 shadow *:capitalize"
              >
                <li>
                        <p
                          onClick={() =>
                            setQueryParams({
                              ...queryParams,
                              orientation: undefined,
                            })
                          }
                          style={{
                            color:
                              queryParams.orientation === undefined
                                ? "black"
                                : "",
                            fontWeight:
                              queryParams.orientation === undefined
                                ? "600"
                                : "",
                          }}
                        >
                          ALL
                        </p>
                      </li>
                      <li>
                        <p
                          onClick={() =>
                            setQueryParams({
                              ...queryParams,
                              orientation: Orientation.Landscape,
                            })
                          }
                          style={{
                            color:
                              queryParams.orientation === Orientation.Landscape
                                ? "black"
                                : "",
                            fontWeight:
                              queryParams.orientation === Orientation.Landscape
                                ? "600"
                                : "",
                          }}
                        >
                          landscape
                        </p>
                      </li>
                      <li>
                        <p
                          onClick={() =>
                            setQueryParams({
                              ...queryParams,
                              orientation: Orientation.Portrait,
                            })
                          }
                          style={{
                            color:
                              queryParams.orientation === Orientation.Portrait
                                ? "black"
                                : "",
                            fontWeight:
                              queryParams.orientation === Orientation.Portrait
                                ? "600"
                                : "",
                          }}
                        >
                          portrait
                        </p>
                      </li>
                      <li>
                        <p
                          onClick={() =>
                            setQueryParams({
                              ...queryParams,
                              orientation: Orientation.Squarish,
                            })
                          }
                          style={{
                            color:
                              queryParams.orientation === Orientation.Squarish
                                ? "black"
                                : "",
                            fontWeight:
                              queryParams.orientation === Orientation.Squarish
                                ? "600"
                                : "",
                          }}
                        >
                          squarish
                        </p>
                      </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end rounded-lg  border">
              <div
                tabIndex={0}
                role="button"
                className="btn  btn-xs border  bg-white sm:btn-sm "
              >
                Order by
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-2 rounded-box border bg-base-100 p-1 shadow *:capitalize "
              >
                <li>
                  <div
                    className="flex items-center justify-start"
                    onClick={() =>
                      setQueryParams({ ...queryParams, isRelevant: false })
                    }
                  >
                    {queryParams.isRelevant === false ? (
                      <CheckIcon />
                    ) : (
                      <div className="h-6 w-6"></div>
                    )}
                    <p>latest</p>
                  </div>
                </li>
                <li>
                  <div
                    className="flex items-center justify-start "
                    onClick={() =>
                      setQueryParams({ ...queryParams, isRelevant: true })
                    }
                  >
                    {queryParams.isRelevant ? (
                      <CheckIcon />
                    ) : (
                      <div className="h-6 w-6"></div>
                    )}
                    <p>relevant</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )} */}
            </header>

        </>
    )
}
