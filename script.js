$(function(){
  setInterval(function(){
    var utcdate = $('#utcdateformat');
    var localdate = $('#localdateformat');  
    //put UTC time into divUTC  
    utcdate.text(moment.utc().format('YYYY-MM-DD HH:mm:ss'));      
    utxtimes = moment.utc().format('YYYY-MM-DD HH:mm:ss');      
    //get text from divUTC and conver to local timezone  
    var localTime  = moment.utc(utcdate.text()).toDate();
    localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
    tms = moment(localTime).format("X");
    
    $('#divstamp').text(tms);
    tmsx = moment(utxtimes).format("X");
    $('#divstampz').text(tmsx);
    //you can change tms to tmsx 
    //tms is localtime
    //tmsx is utctime
    yournix = moment.unix(tms).format('DD-MM-YYYY HH:mm:ss')
    localdate.text(localTime);   
     $('#divstampzclc').text(yournix);
  },1000);
});