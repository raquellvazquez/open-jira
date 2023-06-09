import { FC } from "react"
import Head from "next/head"

import { Box } from "@mui/material"
import { JsxElement } from "typescript";
import { Navbar, Sidebar } from "../ui";

interface LayoutProps {
    title:string;
    children: JSX.Element
}

export const Layout : FC<LayoutProps>= ({title = 'Open Jira', children}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Head>
            <title>{title}</title>
        </Head>

        <Navbar />

        <Sidebar />

        <Box sx={{padding: '10px 20px'}}>
            {children}
        </Box>
    </Box>
  )
}