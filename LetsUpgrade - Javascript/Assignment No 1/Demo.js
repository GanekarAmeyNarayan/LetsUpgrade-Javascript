document.write("<br/>1.consol.log :-mainly used to log(print) the output to the consol. Inside log(it can be a string ,array,object,boolean etc.");
document.write("<br/>Eg. open consol to see output");
console.time("Time Taken");
console.log("Hey I am using console for printing string");
document.write("<br/>2.Console.warn :- it is used to log warning messages to the console by default the warning message will be in yellow colour.");
document.write("<br/>Eg. open consol to see output");
console.warn("Warning!");
document.write("<br/>3.consol.error :- return the error in consol log");
document.write("<br/>Eg. open consol to see output");
console.error('Error');
document.write("<br/4.consol.table :- this method allow us to genrate a table inside a console the input must be an array or else object");
document.write("<br/>Eg. open consol to see output");
console.table({'a': 1,'b': 2});
document.write("<br/>5.console.timeEnd :- it returns the time after the excucation ");
document.write("<br/>Eg. open consol to see output");
console.timeEnd("Time Taken");