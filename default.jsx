import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, TextInput, Dimensions, StyleSheet, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {

    state = {
        
         // This array stores the team name and there record, this will be refrenced in methods when these need to be updated
        teamArray: [
            {
                teamName: 'Team X',
                teamPiece: 'X',
                wins: 0,
                losses: 0,
                ties: 0,
            },
            {
                teamName: 'Team O',
                teamPiece: 'O',
                wins: 0,
                losses: 0,
                ties: 0,
            },
        ],
        
        
        // This array stores onto each square in the board, allowing us to refrence them when the pieces need to be updated
        boxArray: [
            {
                rowNum: 0,
                columnNum: 0,
                gamePiece: '',  
            },
            {
                rowNum: 0,
                columnNum: 1,
                gamePiece: '',
            },
            {
                rowNum: 0,
                columnNum: 2,
                gamePiece: '',
            },
            {
                rowNum: 1,
                columnNum: 0,
                gamePiece: '',
            },
            {
                rowNum: 1,
                columnNum: 1,
                gamePiece: '',
            },
            {
                rowNum: 2,
                columnNum: 2,
                gamePiece: '',
            },
            {
                rowNum: 2,
                columnNum: 0,
                gamePiece: '',
            },
            {
                rowNum: 2,
                columnNum: 1,
                gamePiece: '',
            },
            {
                rowNum: 2,
                columnNum: 2,
                gamePiece: '',
            },
        ],
        
        // This array stores onto each square in the board, allowing us to refrence them when the pieces need to be updated
        // 0 = 1a, 1 = 1b, 2 = 1c, 3 = 2a... etc
        // 0 1 2
        // 3 4 5
        // 6 7 8
        //
        // 1a 1b 1c
        // 2a 2b 2c
        // 3a 3b 3c
        
        tttMapArray: [0, 1, 2],
        turn: 0,
        moves: 0,
        
        // These let us use navbar
        infoPageDisplay: 'block',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'none',
        gamePieceDisplay: '',
    }
    
    // This method allows us to update names if the user changes them
    updateName = (index, name) => {
        let newTeamsArray = [...this.state.teamArray];
        newTeamsArray[index] = {...newTeamsArray[index], teamName: name}
        this.setState({teamArray: newTeamsArray});
    };
    
    takeTurn = (i, j) => {
        this.fillSquare(i, j);
        this.checkWin();
    }
    
    checkWin = () => {
        let tempBoxArray = [...this.state.boxArray];
    };
    
    
    // This method finds where the piece is on the board and manually updates it to represent a piece
    fillSquare = (i, j) => {
        let tempBoxArray = [...this.state.boxArray];
        let tempTeamArray = [...this.state.teamArray];
        let tempPiece = '';
        
        if (this.state.turn == 0) {   
            tempPiece = "X"
            this.setState({turn: 1});
        }
        else {
            tempPiece = "O"
            this.setState({turn: 0});
        }
        
        if (i == 0 && j == 0) {
            if (tempBoxArray[0].gamePiece != "X" && tempBoxArray[0].gamePiece != "O") {
               tempBoxArray[0] = {...tempBoxArray[0], gamePiece: tempPiece}
               this.setState({moves: this.state.moves + 1});
            }
            else {
                if (this.state.turn == 0) {   
                    this.setState({turn: 0});
                }
                else {
                    this.setState({turn: 1});
                }
            }
        } 
        else if (i == 0 && j == 1) {
            if (tempBoxArray[1].gamePiece != "X" && tempBoxArray[1].gamePiece != "O") {    
                tempBoxArray[1] = {...tempBoxArray[1], gamePiece: tempPiece}
                this.setState({moves: this.state.moves + 1});
            }
            else {
                if (this.state.turn == 0) {   
                    this.setState({turn: 0});
                }
                else {
                    this.setState({turn: 1});
                }
            }
        }
        else if (i == 0 && j == 2) {
            if (tempBoxArray[2].gamePiece != "X" && tempBoxArray[2].gamePiece != "O") {    
                tempBoxArray[2] = {...tempBoxArray[2], gamePiece: tempPiece}
                this.setState({moves: this.state.moves + 1});
            }
            else {
                if (this.state.turn == 0) {   
                    this.setState({turn: 0});
                }
                else {
                    this.setState({turn: 1});
                }
                
            }
        }
        else if (i == 1 && j == 0) {
            if (tempBoxArray[3].gamePiece != "X" && tempBoxArray[3].gamePiece != "O") {
                tempBoxArray[3] = {...tempBoxArray[3], gamePiece: tempPiece}
                this.setState({moves: this.state.moves + 1});
            }
            else {
                if (this.state.turn == 0) {   
                    this.setState({turn: 0});
                }
                else {
                    this.setState({turn: 1});
                }
            }
        }
        else if (i == 1 && j == 1) {
            if (tempBoxArray[4].gamePiece != "X" && tempBoxArray[4].gamePiece != "O") {
                tempBoxArray[4] = {...tempBoxArray[4], gamePiece: tempPiece}
                this.setState({moves: this.state.moves + 1});
            }
            else {
                if (this.state.turn == 0) {   
                    this.setState({turn: 0});
                }
                else {
                    this.setState({turn: 1});
                }
            }
        }
        else if (i == 1 && j == 2) {
            if (tempBoxArray[5].gamePiece != "X" && tempBoxArray[5].gamePiece != "O") {
                tempBoxArray[5] = {...tempBoxArray[5], gamePiece: tempPiece}
                this.setState({moves: this.state.moves + 1});
            }
            else {
                if (this.state.turn == 0) {   
                    this.setState({turn: 0});
                }
                else {
                    this.setState({turn: 1});
                }
            }
        }
        else if (i == 2 && j == 0) {
            if (tempBoxArray[6].gamePiece != "X" && tempBoxArray[6].gamePiece != "O") {
                tempBoxArray[6] = {...tempBoxArray[6], gamePiece: tempPiece}
                this.setState({moves: this.state.moves + 1});
            }
            else {
                if (this.state.turn == 0) {   
                    this.setState({turn: 0});
                }
                else {
                    this.setState({turn: 1});
                }
            }
        }
        else if (i == 2 && j == 1) {
            if (tempBoxArray[7].gamePiece != "X" && tempBoxArray[7].gamePiece != "O") {
                tempBoxArray[7] = {...tempBoxArray[7], gamePiece: tempPiece}
                this.setState({moves: this.state.moves + 1});
            }
            else {
                if (this.state.turn == 0) {   
                    this.setState({turn: 0});
                }
                else {
                    this.setState({turn: 1});
                }
            }
        }
        else if (i == 2 && j == 2) {
            if (tempBoxArray[8].gamePiece != "X" && tempBoxArray[8].gamePiece != "O") {
                tempBoxArray[8] = {...tempBoxArray[8], gamePiece: tempPiece}
                this.setState({moves: this.state.moves + 1});
            }
            else {
                if (this.state.turn == 0) {   
                    this.setState({turn: 0});
                }
                else {
                    this.setState({turn: 1});
                }
            }
        }
        
        this.setState({boxArray: tempBoxArray});
        // X
        if (tempBoxArray[0].gamePiece == "X" && tempBoxArray[1].gamePiece == "X" && tempBoxArray[2].gamePiece == "X") {
            alert(tempTeamArray[0].teamName + " wins");
            tempTeamArray[0].wins = tempTeamArray[0].wins + 1;
            tempTeamArray[1].losses = tempTeamArray[1].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[3].gamePiece == "X" && tempBoxArray[4].gamePiece == "X" && tempBoxArray[5].gamePiece == "X") {
            alert(tempTeamArray[0].teamName + " wins");
            tempTeamArray[0].wins = tempTeamArray[0].wins + 1;
            tempTeamArray[1].losses = tempTeamArray[1].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[6].gamePiece == "X" && tempBoxArray[7].gamePiece == "X" && tempBoxArray[8].gamePiece == "X") {
            alert(tempTeamArray[0].teamName + " wins");
            tempTeamArray[0].wins = tempTeamArray[0].wins + 1;
            tempTeamArray[1].losses = tempTeamArray[1].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[0].gamePiece == "X" && tempBoxArray[3].gamePiece == "X" && tempBoxArray[6].gamePiece == "X") {
            alert(tempTeamArray[0].teamName + " wins");
            tempTeamArray[0].wins = tempTeamArray[0].wins + 1;
            tempTeamArray[1].losses = tempTeamArray[1].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[1].gamePiece == "X" && tempBoxArray[4].gamePiece == "X" && tempBoxArray[7].gamePiece == "X") {
            alert(tempTeamArray[0].teamName + " wins");
            tempTeamArray[0].wins = tempTeamArray[0].wins + 1;
            tempTeamArray[1].losses = tempTeamArray[1].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[2].gamePiece == "X" && tempBoxArray[5].gamePiece == "X" && tempBoxArray[8].gamePiece == "X") {
            alert(tempTeamArray[0].teamName);
            tempTeamArray[0].wins = tempTeamArray[0].wins + 1;
            tempTeamArray[1].losses = tempTeamArray[1].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[0].gamePiece == "X" && tempBoxArray[4].gamePiece == "X" && tempBoxArray[8].gamePiece == "X") {
            alert(tempTeamArray[0].teamName + " wins");
            tempTeamArray[0].wins = tempTeamArray[0].wins + 1;
            tempTeamArray[1].losses = tempTeamArray[1].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[2].gamePiece == "X" && tempBoxArray[4].gamePiece == "X" && tempBoxArray[6].gamePiece == "X") {
            alert(tempTeamArray[0].teamName + " wins");
            tempTeamArray[0].wins = tempTeamArray[0].wins + 1;
            tempTeamArray[1].losses = tempTeamArray[1].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        
        // O
        else if (tempBoxArray[0].gamePiece == "O" && tempBoxArray[1].gamePiece == "O" && tempBoxArray[2].gamePiece == "O") {
            alert(tempTeamArray[1].teamName + " wins");
            tempTeamArray[1].wins = tempTeamArray[1].wins + 1;
            tempTeamArray[0].losses = tempTeamArray[0].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[3].gamePiece == "O" && tempBoxArray[4].gamePiece == "O" && tempBoxArray[5].gamePiece == "O") {
            alert(tempTeamArray[1].teamName + " wins");
            tempTeamArray[1].wins = tempTeamArray[1].wins + 1;
            tempTeamArray[0].losses = tempTeamArray[0].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[6].gamePiece == "O" && tempBoxArray[7].gamePiece == "O" && tempBoxArray[8].gamePiece == "O") {
            alert(tempTeamArray[1].teamName + " wins");
            tempTeamArray[1].wins = tempTeamArray[1].wins + 1;
            tempTeamArray[0].losses = tempTeamArray[0].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[0].gamePiece == "O" && tempBoxArray[3].gamePiece == "O" && tempBoxArray[6].gamePiece == "O") {
            alert(tempTeamArray[1].teamName + " wins");
            tempTeamArray[1].wins = tempTeamArray[1].wins + 1;
            tempTeamArray[0].losses = tempTeamArray[0].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[1].gamePiece == "O" && tempBoxArray[4].gamePiece == "O" && tempBoxArray[7].gamePiece == "O") {
            alert(tempTeamArray[1].teamName + " wins");
            tempTeamArray[1].wins = tempTeamArray[1].wins + 1;
            tempTeamArray[0].losses = tempTeamArray[0].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[2].gamePiece == "O" && tempBoxArray[5].gamePiece == "O" && tempBoxArray[8].gamePiece == "O") {
            alert(tempTeamArray[1].teamName + " wins");
            tempTeamArray[1].wins = tempTeamArray[1].wins + 1;
            tempTeamArray[0].losses = tempTeamArray[0].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[0].gamePiece == "O" && tempBoxArray[4].gamePiece == "O" && tempBoxArray[8].gamePiece == "O") {
            alert(tempTeamArray[1].teamName + " wins");
            tempTeamArray[1].wins = tempTeamArray[1].wins + 1;
            tempTeamArray[0].losses = tempTeamArray[0].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (tempBoxArray[2].gamePiece == "O" && tempBoxArray[4].gamePiece == "O" && tempBoxArray[6].gamePiece == "O") {
            alert(tempTeamArray[1].teamName + " wins");
            tempTeamArray[1].wins = tempTeamArray[1].wins + 1;
            tempTeamArray[0].losses = tempTeamArray[0].losses + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        else if (this.state.moves == 9) {
            alert("Tie!");
            tempTeamArray[1].ties = tempTeamArray[1].ties + 1;
            tempTeamArray[0].ties = tempTeamArray[0].ties + 1;
            for (let i = 0; i < tempBoxArray.length; i++){
                tempBoxArray[i].gamePiece = '';
            }
            this.setState({moves:0});
        }
        
        this.setState({boxArray: tempBoxArray, teamArray: tempTeamArray});
    };

    // These methods allow us to switch through the different navbars
    handleInfoPagePress = () => this.setState(state => ({
        infoPageDisplay: 'block',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'none',
    }));
    
    handleGamePagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        gamePageDisplay: 'block',
        standingsPageDisplay: 'none',
    }));
    
    handleStandingsPagePress = () => this.setState(state => ({
        infoPageDisplay: 'none',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'block',
    }));
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Tic Tac Toe
                    </Text>
                </View>
                
                {/* This code deals with the info page, allowing us to change the name of the user*/}
                <View style={{ display: this.state.infoPageDisplay }}>
                    <View style={styles.contentContainer}>
                        {this.state.teamArray.map((team, index) => (
                            <View style={styles.teamNameContainer}>
                                <Text style={styles.teamNameText}>
                                    Team {team.teamPiece} Name:
                                </Text>
                                
                                <TextInput style={styles.teamTextContainer}
                                onChangeText={(name) => this.updateName(index, name)}
                                value={team.teamName}
                                />
                            </View>
                        ))}
                    </View>
                </View>
                
                <View style={{ display: this.state.gamePageDisplay }}>
                    <View style={styles.contentContainer}>
                        <View style={styles.borderContainerMain}>
                        {/* This code will create the board in the array */}
                        {/* 1a, 1b, 1c, 2a, 2b, 2c, 3a, 3b, 3c*/}
                            <View style={styles.borderRowContainer}>
                                {/* This code fills in the individual squares when touched */}
                                <TouchableHighlight style={styles.tttSquare}
                                onPress={() => this.takeTurn(0,0)}
                                >
                                    <View>
                                      <Text style={styles.gamePiece}>
                                        {this.state.boxArray[0].gamePiece}
                                      </Text>
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight style={styles.tttSquare}
                                onPress={() => this.takeTurn(0,1)}
                                >
                                    <View>
                                      <Text style={styles.gamePiece}>
                                        {this.state.boxArray[1].gamePiece}
                                      </Text>
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight style={styles.tttSquare}
                                onPress={() => this.takeTurn(0,2)}
                                >
                                    <View>
                                      <Text style={styles.gamePiece}>
                                        {this.state.boxArray[2].gamePiece}
                                      </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                                
                            <View style={styles.borderRowContainer}>
                                {/* This code fills in the individual squares when touched */}
                                <TouchableHighlight style={styles.tttSquare}
                                onPress={() => this.takeTurn(1,0)}
                                >
                                    <View>
                                      <Text style={styles.gamePiece}>
                                        {this.state.boxArray[3].gamePiece}
                                      </Text>
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight style={styles.tttSquare}
                                onPress={() => this.takeTurn(1,1)}
                                >
                                    <View>
                                      <Text style={styles.gamePiece}>
                                        {this.state.boxArray[4].gamePiece}
                                      </Text>
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight style={styles.tttSquare}
                                onPress={() => this.takeTurn(1,2)}
                                >
                                    <View>
                                      <Text style={styles.gamePiece}>
                                        {this.state.boxArray[5].gamePiece}
                                      </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                                
                            <View style={styles.borderRowContainer}>
                                {/* This code fills in the individual squares when touched */}
                                <TouchableHighlight style={styles.tttSquare}
                                onPress={() => this.takeTurn(2,0)}
                                >
                                    <View>
                                      <Text style={styles.gamePiece}>
                                        {this.state.boxArray[6].gamePiece}
                                      </Text>
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight style={styles.tttSquare}
                                onPress={() => this.takeTurn(2,1)}
                                >
                                    <View>
                                      <Text style={styles.gamePiece}>
                                        {this.state.boxArray[7].gamePiece}
                                      </Text>
                                    </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight style={styles.tttSquare}
                                onPress={() => this.takeTurn(2,2)}
                                >
                                    <View>
                                      <Text style={styles.gamePiece}>
                                        {this.state.boxArray[8].gamePiece}
                                      </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <Text style={styles.titleText}>
                            {this.state.teamArray[this.state.turn].teamName}'s turn
                        </Text>
                    </View>
                </View>
                
                <View style={{ display: this.state.standingsPageDisplay }}>
                    <View style={styles.contentContainer}>
                    {/* This code updates the standings of the players using MAP */}
                        {this.state.teamArray.map((team, index) => (   
                            <View style={styles.teamStandingsContainer}>
                                <Text style={styles.recordText}>
                                    {team.teamName} Record: 
                                </Text>
                                <Text style={styles.recordText2}>
                                    Wins - Losses - Ties
                                </Text>
                                <Text style={styles.recordText}>
                                    {team.wins} - {team.losses} - {team.ties}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
                
                // This code deals with the navbar and setting it up, shouldn't be changed
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleInfoPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Info
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleGamePagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Game
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleStandingsPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Standings
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    titleContainer: {
        height: deviceHeight/8,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    contentContainer: {
        height: 3*(deviceHeight/4),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    navbarContainer: {
        height: deviceHeight/8,
        width: deviceWidth,
        backgroundColor: '#6b6b6b',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: deviceHeight/100,
        borderColor: 'red',
    },
    teamNameContainer: {
        height: deviceHeight/8,
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    teamTextContainer: {
        height: deviceHeight/12,
        width: deviceWidth/3,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: deviceHeight/150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: deviceHeight/70,
        color: 'black',
        fontSize: deviceHeight/20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    teamStandingsContainer: {
        height: deviceHeight/4,
        width: deviceWidth/3*2,
        backgroundColor: '#6b6b6b',
        borderColor: 'red',
        borderWidth: deviceHeight/100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderContainerMain: {
        height: deviceHeight*5/11,
        width: deviceHeight*5/11,
    },
    borderRowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    tttSquare: {
        flex: 1,
        borderColor: 'black',
        borderWidth: deviceHeight/100,
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: deviceHeight/130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: deviceHeight/15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    teamNameText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    recordText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: deviceHeight/25,
        textAlign: 'center',
        paddingTop: deviceHeight/100,
    },
    recordText2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: deviceHeight/30,
        textAlign: 'center',
        paddingTop: deviceHeight/100,
    },
    gamePiece:{
      fontSize: deviceHeight/10,
      textAlign: 'center',
    }
});