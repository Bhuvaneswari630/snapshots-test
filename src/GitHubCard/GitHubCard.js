import { Card } from "react-bootstrap"

function GitHubCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/141053596?v=4" />
                <Card.Body>
                    <Card.Title>Bhuvaneswari630</Card.Title>
                    <Card.Text>
                    Highly motivated software developer with strong foundation in front-end technologies 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard