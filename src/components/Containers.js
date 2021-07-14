import { Container } from "react-bootstrap";

import React from 'react'

export default function Containers(props) {
    return (
        <div>
            <Container>{props.children}</Container>
        </div>
    )
}
