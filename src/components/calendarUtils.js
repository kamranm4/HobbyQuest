import moment from 'moment';

export const hobbiesToEvents = (hobbies) => {
    return hobbies.map(hobby => ({
        title: hobby.name,
        start: moment(hobby.time, 'HH:mm').toDate(),
        end: moment(hobby.time, 'HH:mm').add(1, 'hours').toDate(),  // Assuming hobby lasts 1 hour
        daysOfWeek: hobby.days,  // Ensure hobby.days is an array of integers (0 = Sunday, 6 = Saturday)
    }));
};

