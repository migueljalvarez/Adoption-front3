import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Breadcrumb separator="" >
            <BreadcrumbItem >
            <Link to="/">Home</Link>
                {/* <BreadcrumbLink ></BreadcrumbLink> */}
            </BreadcrumbItem>

            <BreadcrumbItem>
                {/* <BreadcrumbLink ></BreadcrumbLink> */}
                <Link to="/pets">Pets</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
            <Link to="/new">Agregar</Link>
                {/* <BreadcrumbLink ></BreadcrumbLink> */}
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
            <Link to="/auth/login">Login</Link>
                {/* <BreadcrumbLink ></BreadcrumbLink> */}
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default Navbar
