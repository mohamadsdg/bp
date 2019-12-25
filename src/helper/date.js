import moment from 'moment-jalaali';

// work with timeStamp
export const diffDate = (startTime, endTime) => {
   try {
      let myStartTime = moment(startTime, 'YYYY-MM-DDTHH:mm:ss');
      let myEndTime = moment(endTime, 'YYYY-MM-DDTHH:mm:ss');
      let duration = moment.duration(myEndTime.diff(myStartTime));
      let res = duration.hours() + ' ساعت ';

      if (duration.minutes() > 0) {
         res = res + ' و ' + parseInt(duration.minutes()) + ' دقیقه ';
      }

      return res;
   } catch (e) {
      console.log('error in func diffDate', e);
   }
};
export const convertDate = (dateString, hasJalaali, format) => {
   try {
      let m = moment(dateString, 'YYYY-M-DTHH:mm:ss');
      moment.loadPersian({dialect: 'persian-modern'});
      let response = '';
      // let tst = hasJalaali ? m.format('jYYYY') : m.format('YYYY');
      // console.log(tst);

      switch (format) {
         case 'shortTime':
            response = m.format('HH:mm');
            break;
         case 'longTime':
            response = m.format('HH:mm:ss');
            break;
         case 'dateWithDash':
            response = hasJalaali
               ? m.format('jYYYY-jMM-jDD')
               : m.format('YYYY-MM-DD');
            break;
         case 'dateWithSlash':
            response = hasJalaali
               ? m.format('jYYYY/jMM/jDD')
               : m.format('YYYY/MM/DD');
            break;
         case 'parsDate':
            response = hasJalaali
               ? m.locale('fa').format('dddd') +
                 ' ' +
                 m.format('jDD') +
                 ' ' +
                 m.locale('fa').format('jMMMM') +
                 ' ' +
                 m.locale('fa').format('jYYYY')
               : m.locale('en').format('dddd') +
                 ' ' +
                 m.locale('en').format('DD') +
                 ' ' +
                 m.locale('en').format('MMMM') +
                 ' ' +
                 m.locale('en').format('YYYY');
            break;
         case 'parsDate2':
            response = hasJalaali
               ? m.format('jDD') +
                 ' ' +
                 m.locale('fa').format('jMMMM') +
                 ' ' +
                 m.locale('fa').format('jYYYY')
               : m.locale('en').format('dddd') +
                 ' ' +
                 m.locale('en').format('DD') +
                 ' ' +
                 m.locale('en').format('MMMM') +
                 ' ' +
                 m.locale('en').format('YYYY');
            break;
         default:
            response = m.locale('fa').format('YYYY/MM/DD');
            break;
      }
      // console.log(format+' : ', response);
      // throw dateString;
      return response;
   } catch (e) {
      throw new Error(e);
      console.log('error in func convertDateToPersian', e);
   }
};
export const convertToTimeStamp = date => {
   try {
      let enRegex = new RegExp(
         /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/,
      );
      let hasGeorgia = enRegex.test(date);
      let m;
      moment.loadPersian({dialect: 'persian-modern'});
      hasGeorgia
         ? (m = moment(date, 'YYYY/MM/DD'))
         : (m = moment(date, 'jYYYY/jMM/jDD'));
      // console.log('convertToTimeStamp', m);
      m = m.format('YYYY-M-DTHH:mm:ss');
      return m;
   } catch (e) {
      // throw new Error(e);
      console.log('error in func convertToTimeStamp', e);
   }
};
