/* eslint-disable valid-jsdoc */
'use strict';

/**
 * Base class for all errors
 */
function RippleError(message) {
  this.message = message;
}
RippleError.prototype = new Error();
RippleError.prototype.name = 'RippleError';

function ValidationError(message) {
  this.message = message;
}
ValidationError.prototype = new RippleError();
ValidationError.prototype.name = 'ValidationError';

/**
 * Timeout, disconnects and too busy
 */
function NetworkError(message) {
  this.message = message;
}
NetworkError.prototype = new RippleError();
NetworkError.prototype.name = 'NetworkError';

/**
 * Failed transactions, no paths found, not enough balance, etc.
 */
function RippledNetworkError(message) {
  this.message = message !== undefined ? message : 'Cannot connect to rippled';
}
RippledNetworkError.prototype = new NetworkError();

/**
 * Failed transactions, no paths found, not enough balance, etc.
 */
function TransactionError(message) {
  this.message = message;
}
TransactionError.prototype = new RippleError();
TransactionError.prototype.name = 'TransactionError';

/**
 * Asset could not be found
 */
function NotFoundError(message) {
  this.message = message;
}
NotFoundError.prototype = new RippleError();
NotFoundError.prototype.name = 'NotFoundError';

function MissingLedgerHistoryError(message) {
  this.message = message ||
    'Server is missing ledger history in the specified range';
}
MissingLedgerHistoryError.prototype = new RippleError();
MissingLedgerHistoryError.prototype.name = 'MissingLedgerHistoryError';

function PendingLedgerVersionError(message) {
  this.message = message ||
    'maxLedgerVersion is greater than server\'s most recent validated ledger';
}
PendingLedgerVersionError.prototype = new RippleError();
PendingLedgerVersionError.prototype.name = 'PendingLedgerVersionError';

/**
 * Request timed out
 */
function TimeOutError(message) {
  this.message = message;
}
TimeOutError.prototype = new RippleError();
TimeOutError.prototype.name = 'TimeOutError';

/**
 * API logic failed to do what it intended
 */
function ApiError(message) {
  this.message = message;
}
ApiError.prototype = new RippleError();
ApiError.prototype.name = 'ApiError';

module.exports = {
  ValidationError,
  NetworkError,
  TransactionError,
  RippledNetworkError,
  NotFoundError,
  PendingLedgerVersionError,
  MissingLedgerHistoryError,
  TimeOutError,
  ApiError,
  RippleError
};
