import * as R from "ramda";

const formatDate = (d) =>
    R.join(' ', [
        R.join('-', [
            d.getFullYear(),
            d.getMonth() + 1,
            d.getDate()]),
        R.join(':', [
            d.getHours(),
            d.getMinutes(),
            d.getSeconds()])])

const formatThreadDate = R.compose(
    (t) => R.assoc('created_at', formatDate(new Date(R.prop('created_at', t))), t),
    (t) => R.assoc('updated_at', formatDate(new Date(R.prop('updated_at', t))), t))

export {formatDate, formatThreadDate}