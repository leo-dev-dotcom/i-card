import React from 'react'
import './Cards.css'
import { Card } from 'react-bootstrap'
export default function Cards(props) {
    return (
        <div>
            <Card className='card my-5' >
                <Card.Img className='img' variant="top" src={props.src} />
                <Card.Body className='text-light'>
                    <Card.Title className='text-dark text-center text-uppercase text-decoration-underline'>{props.company_name}</Card.Title>
                    <Card.Text>
                        Name: {props.name}
                    </Card.Text>
                    <Card.Text>
                        DOB: {props.dob}
                    </Card.Text>
                    <Card.Text>
                        ID No: {props.id_no}
                    </Card.Text><Card.Text>
                        Blood Group: {props.blood_group}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    )
}
