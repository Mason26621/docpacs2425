/*___   _   _       _         ____             _        _     _       
 |_ _| | | | | __ _| |_ ___  / ___|  ___   ___| | _____| |_  (_) ___  
  | |  | |_| |/ _` | __/ _ \ \___ \ / _ \ / __| |/ / _ \ __| | |/ _ \ 
  | |  |  _  | (_| | ||  __/  ___) | (_) | (__|   <  __/ |_ _| | (_) |
 |___| |_| |_|\__,_|\__\___| |____/ \___/ \___|_|\_\___|\__(_)_|\___/*/


//Declare modules
const node = require('node');
const express = require('express');
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ server: http });
const server = app.listen(port, () => { console.log(`Server is running on port ${port}`) });
const io = socketIo(server);








/* For those who need a refresher on THE ENEMY!! 👇

                                                                                                                             
                                                                                                             ▓ ▓             
                                                                                                            ██▓▓             
                                                                                               ░     ▒▓█▓▒▒██▓▒▒             
                                                                                             ▒▒░▓██████▓█▒█▓▓▒▒▒▒            
                                                                                        ░ ▒▒▒▓▓▒██████▓▓▓▓▓▓▓▓▒▒▒▒           
                                                                                         ▒░▓▓▓█████▓▓▓▓▓▓█▓▓▓████▓▒▒         
                                                                                         ▒▓████████▓▓▓▓▓▓█▓▓▒▓▓▒▓▒▒▒▒        
                                                                                        ▒▒████████▓▓▓▓▓▓▓███▓▓▓▓█▒▓▒▒▒▒      
                                                                                      ░ ▓▒████████▓▓▓▓▓▓███▓▓███▓▓▒▒▓▒▒▒     
                                                                                      ▒░███████████▓▓▓▓▓██████████▓▒▓▓▒█▓▒   
                                                                                  ░▒▒▓█████████▓█▓█▓▓▓▓▓███    █████▓▓▓███▒  
                                                                                   ░▒██████▓▓▓▓████▓▓▓▓▓██         ███▓██▓   
                                                 ▒▒▒▒▒▒▒▒░░▒▒▒▒▒                ▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓██           ████    
                                             ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██▓▓▓▓▓▒▒▓▓▓▓▓▓▓▓▓▓█▓                    
                                          ▒▒▒▒▒▒▒▒▓▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓█                    
                                     ▒▓██▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▒▒▓▒▓▓▓▓▓▓▓▓▓▓▓▓                     
                   ░               ░█████▒▒▒▒▒▓▒▓▓▓▓▓▓▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▓▓▓▓█▓▓▓▓▓▓                     
                  ▒▒░░            ▓▓████▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▒▒▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓█▓▓                      
        ░    ▒▒ ░░ ▓░▒░  ░       ▓███████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▒▒▒▒▒▒▒▓▒▒▒▒▓▓▓▓█▓                       
        ░░▒▒ ░░▓░▒▒▓▓▓░ ░▒ ▒    ███████████▓▓▓▓▓▓▓▓▓██▓▓▓▓██▓▓▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▒▒▒▓▒▓▓▒▒▒▒▒▒▒▒▓▓▓█                      
       ░░ ▒▒▓▒▒▒▓▓▓▓▓▓▓▓▒▒▓▒▒▒▓▓██████████████▓▓▓▓▓▓▓▓▓▓██████▓▓▓▓▓▒▓▓▓▓▒▒▒▒▒▒▒▓▒▓▓▒▒▒▒▓▓▓▓▓▒▓▓▒▒▒▓▓▓██                      
      ░░▒░▒▓▓▓▓█▓▓▓▓█████████████████████ █████▓▓▓▓▓▓▓▓▓▒██▓█▓████▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓█▓▓▒▒▒▓▓▓▓▓▓▒▓▒▒▒▓▓▓█                       
    ░░▒▒▓▒▒░▒▓▓█████████████████████████   ▓█████▓▓▓▓▓▓▓▒█████████████▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▒▓▓█▓██▓▓▓▓▒▒▓▒                        
     ░▒▒░▒▓▓▓▓▓██████████████████▓█▓▓▓      ███████▓█▓▓▓▒▓██████████████████▓▓███████▓▓▓▓▓████▓█▓▒▓█                         
         ▒░▒▓█▓████████████████▓▓▓█          █████████▓▓▓▒█████   █████████████████████▓▓██████▓▓▓▓                          
       ░░ ▒▒▒▒▓▓▓█████████▒▓█▒▒▒ ░            ████████████████          ███████████████████████████                          
          ░ ▒▒▓▓▒▓▓▓▒▓▓▒░░ ░                  ███████████████                       ██████▓███████▓█                         
                                             ███████████████                         █████▓▓  ███▓▒██                        
                                          █████████████████                          ██████     █▓▓▓▓█                       
                                        ██████████ ███████                           ██████       █▓█▓█                      
                                        ███████   ███████                            ░████▓         ████                     
                                         █████    ███████                             ████▓          ███                     
                                          ████      █████                             ████▒          ███                     
                                           ████       █████                           ████          ██▒                      
                                            ████        █████                         ████        ███░                       
                                             ███▓         █████                      ████        ███▓                        
                                              ██▓▓          █████                  ████         ████                         
                                              ████▓          ██▓▓              ░█████       ▒▓▓▓██                           
                                               ███             ▓▓▓         ▒█▓█████         ▒▓██                             
                                             ▓▒▒▓             █▓█▓        ▓████             ░▓                               
                                             ▓▓▓                ▓▓        ██                                                 
                                              ▓                                                                              
                                                                                                                           */
