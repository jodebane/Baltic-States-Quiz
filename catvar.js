"use strict";

import data from './quizinfo.json' assert {type: 'json'};

//console.log(data.quizarray[0]);

var jsonvar = data;
var question = jsonvar.quizarray[0].questionblock1.question;
var answer1 = jsonvar.quizarray[0].questionblock1.answer1;
var answer2 = jsonvar.quizarray[0].questionblock1.answer2;
var answer3 = jsonvar.quizarray[0].questionblock1.answer3;
var answer4 = jsonvar.quizarray[0].questionblock1.answer4;

var qa_array = [question, answer1,answer2,answer3,answer4]

//console.log(answer1);
export default qa_array;





