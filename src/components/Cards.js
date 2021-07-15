import React from 'react'
import { useState } from 'react'
import './Cards.css'
import { Card } from 'react-bootstrap'
export default function Cards({ src, company_name, name, dob, id_no, blood_group }) {
    const [company_names, setCompanyName] = useState(company_name)
    let update = () => {
        setCompanyName('Tesla, Inc.')
    }
    let reset = () => {
        window.location.reload(false);
    }
    return (
        <div>
            <Card className='card my-3' >
                <Card.Img className='img' variant="top" src={src} />
                <Card.Body className='text-light'>
                    <Card.Title className='text-dark text-center text-uppercase text-decoration-underline'>{company_names}</Card.Title>
                    <Card.Text>
                        Name: {name}
                    </Card.Text>
                    <Card.Text>
                        DOB: {dob}
                    </Card.Text>
                    <Card.Text>
                        ID No: {id_no}
                    </Card.Text><Card.Text>
                        Blood Group: {blood_group}
                    </Card.Text>
                    <button onClick={update} className='btn btn-sm btn-outline-dark'>Update</button>
                    <button onClick={reset} className='btn btn-sm btn-outline-danger mx-2'>Reset</button>
                </Card.Body>

            </Card>
        </div>
    )
}
