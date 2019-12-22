import ca from "element-ui/src/locale/lang/ca";

const Unit=(function () {
  return {
    messageType(type){
      let result;
      switch (type) {
        case '1':
          result ='安全'
          break;
        case '2':
          result='质量'
          break;
        case 3:
          result ='通知'
          break;
        default:
          result ='其他'
      }
      return result;
    }
  }
})()
export  default  Unit
