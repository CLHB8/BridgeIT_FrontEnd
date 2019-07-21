import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserService from "../../services/UserService";
import SeniorPage from "./SeniorPage";
import {CardTitle, Cell, Grid, TextField} from "react-md";
import {AlertMessage} from "../AlertMessage";
import {withRouter} from "react-router-dom";
import {SimpleLink} from "../SimpleLink";
import {SenRequestFormView} from "../../views/SenRequestFormView";

class ContactData extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.setState({
            loading: false,
        });
        console.log('loading: false');
    }

    render() {
        return (
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Your choosen student"
                                height="140"
                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                title="Your choosen student"
                            />
                            <CardContent>
                                <Typography variant="subtitle1" color="textSecondary" component="h5">
                                    Reach out now by using the following contact information:
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Here is the student you choose:
                                </Typography>

                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.theChoosenFirstName} {this.props.theChoosenLastName}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" component="h5">
                                    Phone Number: {this.props.theChoosenPhone}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" component="h5">
                                    Mail: {this.props.theChoosenMail}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <SimpleLink to={'/sen/myRequests'}><Button>Go back to overview</Button></SimpleLink>
                        </CardActions>

                    </Card>
        )
    }
}

export default withRouter(ContactData);