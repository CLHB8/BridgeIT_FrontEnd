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

class SenRequestForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.request != undefined) {
            this.state = {
                category: props.request.category,
                specification: props.request.specification,
                userId: props.request.userId,
                senUserName: props.request.senUserName,
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
                isAssigned: props.request.isAssigned,
                assignedStudent: props.request.assignedStudent,
            };
        } else {
            this.state = {
                category: '',
                specification: '',
                userId: '',
                senUserName: '',
                user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined,
                isAssigned: '',
                assignedStudent: ''
            };
        }

        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeSpecification = this.handleChangeSpecification.bind(this);

        this.handleSubmitPrinter = this.handleSubmitPrinter.bind(this);
        this.handleSubmitMobilePhone = this.handleSubmitMobilePhone.bind(this);
        this.handleSubmitTV = this.handleSubmitTV.bind(this);
        this.handleSubmitComputer = this.handleSubmitComputer.bind(this);
        this.handleSubmitCustom = this.handleSubmitCustom.bind(this);
        this.handleSubmitPurchase = this.handleSubmitPurchase.bind(this);
    }

    handleChangeCategory(value) {
        this.setState(Object.assign({}, this.state, {category: value}));
    }

    handleChangeSpecification(value) {
        this.setState(Object.assign({}, this.state, {specification: value}));
    }

    handleSubmitMobilePhone(event) {
        event.preventDefault();

        let request = this.props.request;
        if (request == undefined) {
            request = {};
        }

        request.category = 'Mobile Phone Coaching';
        request.specification = 'I need help with my mobile phone or have general questions about it.';
        request.userId = '';
        request.senUserName = this.state.user.username;
        request.isAssigned = false;
        request.assignedStudent = null;

        this.props.onSubmit(request);
    }

    handleSubmitComputer(event) {
        event.preventDefault();

        let request = this.props.request;
        if (request == undefined) {
            request = {};
        }

        request.category = 'Computer Coaching';
        request.specification = 'I need help with my laptop / PC or have general questions about it.';
        request.userId = '';
        request.senUserName = this.state.user.username;
        request.isAssigned = false;
        request.assignedStudent = null;

        this.props.onSubmit(request);
    }

    handleSubmitTV(event) {
        event.preventDefault();

        let request = this.props.request;
        if (request == undefined) {
            request = {};
        }

        request.category = 'TV Coaching';
        request.specification = 'I need help with my TV or have general questions about it.';
        request.userId = '';
        request.senUserName = this.state.user.username;
        request.isAssigned = false;
        request.assignedStudent = null;

        this.props.onSubmit(request);
    }

    handleSubmitPrinter(event) {
        event.preventDefault();

        let request = this.props.request;
        if (request == undefined) {
            request = {};
        }

        request.category = 'Printer Coaching';
        request.specification = 'I need help with my printer or have general questions about it.';
        request.userId = '';
        request.senUserName = this.state.user.username;
        request.isAssigned = false;
        request.assignedStudent = null;

        this.props.onSubmit(request);
    }

    handleSubmitCustom(event) {
        event.preventDefault();

        let request = this.props.request;
        if(request == undefined) {
            request = {};
        }

        request.category = 'Custom';
        request.specification = this.state.specification;
        request.userId = '';
        request.senUserName = this.state.user.username;
        request.isAssigned = false;
        request.assignedStudent = null;

        this.props.onSubmit(request);
    }

    handleSubmitPurchase(event) {
        event.preventDefault();

        let request = this.props.request;
        if(request == undefined) {
            request = {};
        }

        request.category = 'Purchase Advice';
        request.specification = 'I need help with deciding which device to get for my needs.';
        request.userId = '';
        request.senUserName = this.state.user.username;
        request.isAssigned = false;
        request.assignedStudent = null;

        this.props.onSubmit(request);
    }

    render() {
        return (
            <SeniorPage user={this.state.user}>
                <Grid className="md-block-centered">
                    <Cell size={12}>
                        <h3>On this page you can add a new request based on your needs.</h3>
                        <h3>You can either choose one of our predefined categories or and define your own below.</h3>
                    </Cell>
                    <Cell size={4}>
                        <form className="md-grid" onSubmit={this.handleSubmitMobilePhone}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Mobile Phone Coaching"
                                        height="140"
                                        image="https://i.imgur.com/dv1LM2R.jpg"
                                        title="Mobile Phone Coaching"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Mobile Phone Coaching
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            You need help with your mobile phone or have general questions about it?
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button id="submit" type="submit"
                                            raised primary className="md-cell--12-desktop">Choose</Button>
                                </CardActions>

                            </Card>
                        </form>
                    </Cell>


                    <Cell size={4}>
                        <form className="md-grid" onSubmit={this.handleSubmitComputer}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="PC_Computer Coaching"
                                        height="140"
                                        image="https://i.imgur.com/ART1geZ.jpg"
                                        title="PC_Computer Coaching"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            PC / Computer Coaching
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            You need help with your computer or PC or have general questions about it?
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button id="submit" type="submit"
                                            raised primary className="md-cell--12-desktop">Choose</Button>
                                </CardActions>

                            </Card>
                        </form>
                    </Cell>

                    <Cell size={4}>
                        <form className="md-grid" onSubmit={this.handleSubmitTV}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="TV Coaching"
                                        height="140"
                                        image="https://i.imgur.com/DfFIucI.jpg"
                                        title="TV Coaching"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            TV Coaching
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            You need help with your TV or have general questions about it?
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button id="submit" type="submit"
                                            raised primary className="md-cell--12-desktop">Choose</Button>
                                </CardActions>

                            </Card>
                        </form>
                    </Cell>

                    <Cell size={4}>
                        <form className="md-grid" onSubmit={this.handleSubmitPrinter}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Printer Coaching"
                                        height="140"
                                        image="https://i.imgur.com/NCuV4n3.jpg"
                                        title="Printer Coaching"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Printer Coaching
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            You need help with your printer or have general questions about it?
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button id="submit" type="submit"
                                            raised primary className="md-cell--12-desktop">Choose</Button>
                                </CardActions>

                            </Card>
                        </form>
                    </Cell>
                    <Cell size={4}>
                        <form className="md-grid" onSubmit={this.handleSubmitPurchase}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="General purchase advice"
                                        height="140"
                                        image="https://i.imgur.com/4LHmqH2.jpg"
                                        title="General purchase advice"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            General purchase advice
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            I need help with deciding which device to get for my needs.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button id="submit" type="submit"
                                            raised primary className="md-cell--12-desktop">Choose</Button>
                                </CardActions>

                            </Card>
                        </form>
                    </Cell>
                    <Cell size={4}>
                        <form className="md-grid" onSubmit={this.handleSubmitCustom}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Custom Request"
                                        height="80"
                                        image="https://i.imgur.com/rblPT8Q.jpg"
                                        title="Custom Request"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Your Custom Request:
                                        </Typography>
                                        <TextField
                                            label="Explain your request here"
                                            id="SpecificationField"
                                            type="text"
                                            className="md-row"
                                            required={true}
                                            value={this.state.specification}
                                            onChange={this.handleChangeSpecification}
                                            errorText="Please fill out this field."/>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button id="submit" type="submit"
                                            raised primary className="md-cell--12-desktop">Choose</Button>
                                </CardActions>

                            </Card>
                        </form>
                    </Cell>

                </Grid>
            </SeniorPage>
        );
    }
}

export default withRouter(SenRequestForm);