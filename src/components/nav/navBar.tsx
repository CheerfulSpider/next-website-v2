"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaChevronDown } from "react-icons/fa";
import LogoMark from "../../../public/images/LogoMark";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Text, Box, Flex } from "@radix-ui/themes";

import cx from "classnames";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
      isSubMenu:false
    },
    {
      id: 2,
      title: "About Us",
      url: "/about-us",
      isSubMenu:false
    },
    {
      id: 3,
      title: "Needs",
      url: "/needs-assessment",
      isSubMenu:true,
      subMenu:[
        {
          id:3.1,
          title:"Overview",
          url:""
        },
        {
          id:3.2,
          title:"Data Explorer",
          url:""
        },
        {
          id:3.3,
          title:"Methodology",
          url:""
        }
      ]
    },
    {
      id: 4,
      title: "Regions",
      url: "/regions",
      isSubMenu:true,
      subMenu:[
        {
          id:4.1,
          title:"Overview",
          url:""
        },
        {
          id:4.2,
          title:"USA",
          url:""
        },
        {
          id:4.3,
          title:"Europe",
          url:""
        },
        {
          id:4.4,
          title:"Middle East",
          url:""
        }
      ]
    },
    {
      id: 5,
      title: "Resources",
      url: "/resources/assort",
      isSubMenu:false
    },
    {
      id: 6,
      title: "Tech",
      url: "/tech",
      isSubMenu:true,
      subMenu:[
        {
          id:6.1,
          title:"Example 1",
          url:""
        }
      ]
    },
    {
      id: 7,
      title: "Donate",
      url: "/donate",
      isSubMenu:false
    },
  ];

  return (
    //We're using a Radix primitive for the navbar which allows custom styling
    <>
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex justify-between  items-center w-full h-20 text-white bg-navy-900 fixed nav z-40">
            
            <Text className="text-5xl font-signature ml-2">
              <Link
                className="link-underline link-underline-black"
                href="/"
                target=""
                rel="noreferrer"
              >
                <LogoMark width="50" height={(60 / 70) * 50} />
              </Link>
            </Text>
          
            {/* Desktop menu */}
            <Flex
              gap="4"
              width={"100%"}
              justify={"center"}
              className="hidden md:flex"
            >
              {links.map(({ id, title, url, isSubMenu,subMenu }) => (
                <NavigationMenu.Item key={id}>
                  <NavigationMenu.Trigger >
                    <Box asChild py="3" px={{ sm: "3", md: "6" }}>
                      <Text asChild wrap="nowrap">
                        <Link
                          className={cx(
                            " cursor-pointer capitalize font-medium hover:underline decoration-2 underline-offset-8 duration-200",
                            {
                              "text-dark-blue ml-auto bg-white rounded-lg ":
                                id === 7,
                            },
                          )}
                          href={url}
                        >
                          {isSubMenu ? 
                          (<Flex
                            position={"relative"}
                            align={'center'}
                            gap={"2"}
                            >
                            {title} <FaChevronDown size={15} />
                            <NavigationMenu.Content >
                              <NavigationMenu.Sub>
                                <NavigationMenu.List>
                                  <Box
                                    className="border bg-navy-900 "
                                    mt={"6"}
                                    p="4"
                                    position={"absolute"}
                                    top={"0"}
                                    right={"0"}
                                    width={"auto"}
                                    >
                                      <ul>
                                        {subMenu?.map(({id,title,url})=>(
                                          <NavigationMenu.Item key={id}>
                                            <Box
                                            className="hover:underline"
                                              >
                                                {title}
                                            </Box>
                                          </NavigationMenu.Item>
                                          
                                        ))}
                                      </ul>
                                  </Box>
                                </NavigationMenu.List>
                              </NavigationMenu.Sub>
                            </NavigationMenu.Content>
                          </Flex>): 
                          title}
                        </Link>
                      </Text>
                    </Box>
                  </NavigationMenu.Trigger>
                </NavigationMenu.Item>
              ))}
            </Flex>
          

          {/* Mobile menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-white md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <NavigationMenu.Item className="flex flex-col md:hidden justify-center items-center absolute top-0 left-0 w-full h-screen bg-navy-900 text-white">
              {links.map(({ id, title, url }) => (
                <NavigationMenu.List
                  key={id}
                  className="px-4 cursor-pointer capitalize py-4 text-3xl"
                >
                  <Link onClick={() => setNav(!nav)} href={url}>
                    {title}
                  </Link>
                </NavigationMenu.List>
              ))}
            </NavigationMenu.Item>
          )}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
};

export default NavBar;
