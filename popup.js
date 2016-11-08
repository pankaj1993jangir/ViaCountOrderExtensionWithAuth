 var appBaseUrl="/callcenter?action1=S9238479HDF&orderReference=&email=&phone=&pnr=&ticketNo=&status=D&s_orderDate="+getTodaysDate()+"&e_orderDate="+getTodaysDate()+"&source=A&type=ALL&paymentType=ALL&isApproved=ALL&reason=ALL&supplier_conf_status=-&carrier_id=-1&s_travelDate=&e_travelDate=&group_booking_mode=&sourceType=3&paymentMade=-&gdspnr=&supplierid=";
 var baseUrl = "/callcenter?action1=S9238479HDF&orderReference=&email=&phone=&pnr=&ticketNo=&status=D&s_orderDate="+getTodaysDate+"&e_orderDate="+getTodaysDate+"&source=A&type=ALL&paymentType=ALL&isApproved=ALL&reason=ALL&supplier_conf_status=-&carrier_id=-1&s_travelDate=&e_travelDate=&group_booking_mode=&sourceType=0&paymentMade=-&gdspnr=&supplierid=";
 
 function getTodaysDate(){
  var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    var today = dd+'/'+mm+'/'+yyyy;
    return today;
}

function openUrl(hostUrl){
  chrome.tabs.create({ url: hostUrl});
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sg_count').addEventListener('click', function() {
      openUrl("http://sg.via.com"+appBaseUrl);
    });

    document.getElementById('ae_count').addEventListener('click', function() {
      openUrl("http://ae.via.com"+appBaseUrl);
    });

    document.getElementById('th_count').addEventListener('click', function() {
      openUrl("http://th.via.com"+appBaseUrl);
    });

    document.getElementById('id_count').addEventListener('click', function() {
      openUrl("http://www.via.id"+appBaseUrl);
    });

    document.getElementById('sg').addEventListener('click', function() {
      openUrl("http://sg.via.com"+baseUrl);
    });

    document.getElementById('ae').addEventListener('click', function() {
      openUrl("http://ae.via.com"+baseUrl);
    });

    document.getElementById('th').addEventListener('click', function() {
      openUrl("http://th.via.com"+baseUrl);
    });

    document.getElementById('id').addEventListener('click', function() {
      openUrl("http://www.via.id"+baseUrl);
    });
});