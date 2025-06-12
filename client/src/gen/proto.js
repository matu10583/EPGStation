/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.epgstation = (function() {

    /**
     * Namespace epgstation.
     * @exports epgstation
     * @namespace
     */
    var epgstation = {};

    epgstation.nicojk = (function() {

        /**
         * Namespace nicojk.
         * @memberof epgstation
         * @namespace
         */
        var nicojk = {};

        nicojk.service = (function() {

            /**
             * Namespace service.
             * @memberof epgstation.nicojk
             * @namespace
             */
            var service = {};

            service.edge = (function() {

                /**
                 * Namespace edge.
                 * @memberof epgstation.nicojk.service
                 * @namespace
                 */
                var edge = {};

                edge.ChunkedEntry = (function() {

                    /**
                     * Properties of a ChunkedEntry.
                     * @memberof epgstation.nicojk.service.edge
                     * @interface IChunkedEntry
                     * @property {string|null} [channelId] ChunkedEntry channelId
                     */

                    /**
                     * Constructs a new ChunkedEntry.
                     * @memberof epgstation.nicojk.service.edge
                     * @classdesc Represents a ChunkedEntry.
                     * @implements IChunkedEntry
                     * @constructor
                     * @param {epgstation.nicojk.service.edge.IChunkedEntry=} [properties] Properties to set
                     */
                    function ChunkedEntry(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ChunkedEntry channelId.
                     * @member {string} channelId
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @instance
                     */
                    ChunkedEntry.prototype.channelId = "";

                    /**
                     * Creates a new ChunkedEntry instance using the specified properties.
                     * @function create
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @static
                     * @param {epgstation.nicojk.service.edge.IChunkedEntry=} [properties] Properties to set
                     * @returns {epgstation.nicojk.service.edge.ChunkedEntry} ChunkedEntry instance
                     */
                    ChunkedEntry.create = function create(properties) {
                        return new ChunkedEntry(properties);
                    };

                    /**
                     * Encodes the specified ChunkedEntry message. Does not implicitly {@link epgstation.nicojk.service.edge.ChunkedEntry.verify|verify} messages.
                     * @function encode
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @static
                     * @param {epgstation.nicojk.service.edge.IChunkedEntry} message ChunkedEntry message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ChunkedEntry.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
                        return writer;
                    };

                    /**
                     * Encodes the specified ChunkedEntry message, length delimited. Does not implicitly {@link epgstation.nicojk.service.edge.ChunkedEntry.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @static
                     * @param {epgstation.nicojk.service.edge.IChunkedEntry} message ChunkedEntry message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ChunkedEntry.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ChunkedEntry message from the specified reader or buffer.
                     * @function decode
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {epgstation.nicojk.service.edge.ChunkedEntry} ChunkedEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ChunkedEntry.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.epgstation.nicojk.service.edge.ChunkedEntry();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.channelId = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ChunkedEntry message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {epgstation.nicojk.service.edge.ChunkedEntry} ChunkedEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ChunkedEntry.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ChunkedEntry message.
                     * @function verify
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ChunkedEntry.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            if (!$util.isString(message.channelId))
                                return "channelId: string expected";
                        return null;
                    };

                    /**
                     * Creates a ChunkedEntry message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {epgstation.nicojk.service.edge.ChunkedEntry} ChunkedEntry
                     */
                    ChunkedEntry.fromObject = function fromObject(object) {
                        if (object instanceof $root.epgstation.nicojk.service.edge.ChunkedEntry)
                            return object;
                        var message = new $root.epgstation.nicojk.service.edge.ChunkedEntry();
                        if (object.channelId != null)
                            message.channelId = String(object.channelId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ChunkedEntry message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @static
                     * @param {epgstation.nicojk.service.edge.ChunkedEntry} message ChunkedEntry
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ChunkedEntry.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.channelId = "";
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            object.channelId = message.channelId;
                        return object;
                    };

                    /**
                     * Converts this ChunkedEntry to JSON.
                     * @function toJSON
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ChunkedEntry.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ChunkedEntry
                     * @function getTypeUrl
                     * @memberof epgstation.nicojk.service.edge.ChunkedEntry
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ChunkedEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/epgstation.nicojk.service.edge.ChunkedEntry";
                    };

                    return ChunkedEntry;
                })();

                return edge;
            })();

            return service;
        })();

        return nicojk;
    })();

    return epgstation;
})();

$root.dwango = (function() {

    /**
     * Namespace dwango.
     * @exports dwango
     * @namespace
     */
    var dwango = {};

    dwango.nicolive = (function() {

        /**
         * Namespace nicolive.
         * @memberof dwango
         * @namespace
         */
        var nicolive = {};

        nicolive.chat = (function() {

            /**
             * Namespace chat.
             * @memberof dwango.nicolive
             * @namespace
             */
            var chat = {};

            chat.service = (function() {

                /**
                 * Namespace service.
                 * @memberof dwango.nicolive.chat
                 * @namespace
                 */
                var service = {};

                service.edge = (function() {

                    /**
                     * Namespace edge.
                     * @memberof dwango.nicolive.chat.service
                     * @namespace
                     */
                    var edge = {};

                    edge.MessageSegment = (function() {

                        /**
                         * Properties of a MessageSegment.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @interface IMessageSegment
                         * @property {google.protobuf.ITimestamp|null} [from] MessageSegment from
                         * @property {google.protobuf.ITimestamp|null} [until] MessageSegment until
                         * @property {string|null} [uri] MessageSegment uri
                         */

                        /**
                         * Constructs a new MessageSegment.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @classdesc Represents a MessageSegment.
                         * @implements IMessageSegment
                         * @constructor
                         * @param {dwango.nicolive.chat.service.edge.IMessageSegment=} [properties] Properties to set
                         */
                        function MessageSegment(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * MessageSegment from.
                         * @member {google.protobuf.ITimestamp|null|undefined} from
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @instance
                         */
                        MessageSegment.prototype.from = null;

                        /**
                         * MessageSegment until.
                         * @member {google.protobuf.ITimestamp|null|undefined} until
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @instance
                         */
                        MessageSegment.prototype.until = null;

                        /**
                         * MessageSegment uri.
                         * @member {string} uri
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @instance
                         */
                        MessageSegment.prototype.uri = "";

                        /**
                         * Creates a new MessageSegment instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IMessageSegment=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.service.edge.MessageSegment} MessageSegment instance
                         */
                        MessageSegment.create = function create(properties) {
                            return new MessageSegment(properties);
                        };

                        /**
                         * Encodes the specified MessageSegment message. Does not implicitly {@link dwango.nicolive.chat.service.edge.MessageSegment.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IMessageSegment} message MessageSegment message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MessageSegment.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                                $root.google.protobuf.Timestamp.encode(message.from, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.until != null && Object.hasOwnProperty.call(message, "until"))
                                $root.google.protobuf.Timestamp.encode(message.until, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uri);
                            return writer;
                        };

                        /**
                         * Encodes the specified MessageSegment message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.MessageSegment.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IMessageSegment} message MessageSegment message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MessageSegment.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a MessageSegment message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.service.edge.MessageSegment} MessageSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MessageSegment.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.service.edge.MessageSegment();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.from = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.until = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.uri = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a MessageSegment message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.service.edge.MessageSegment} MessageSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MessageSegment.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a MessageSegment message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        MessageSegment.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.from != null && message.hasOwnProperty("from")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.from);
                                if (error)
                                    return "from." + error;
                            }
                            if (message.until != null && message.hasOwnProperty("until")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.until);
                                if (error)
                                    return "until." + error;
                            }
                            if (message.uri != null && message.hasOwnProperty("uri"))
                                if (!$util.isString(message.uri))
                                    return "uri: string expected";
                            return null;
                        };

                        /**
                         * Creates a MessageSegment message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.service.edge.MessageSegment} MessageSegment
                         */
                        MessageSegment.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.service.edge.MessageSegment)
                                return object;
                            var message = new $root.dwango.nicolive.chat.service.edge.MessageSegment();
                            if (object.from != null) {
                                if (typeof object.from !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.MessageSegment.from: object expected");
                                message.from = $root.google.protobuf.Timestamp.fromObject(object.from);
                            }
                            if (object.until != null) {
                                if (typeof object.until !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.MessageSegment.until: object expected");
                                message.until = $root.google.protobuf.Timestamp.fromObject(object.until);
                            }
                            if (object.uri != null)
                                message.uri = String(object.uri);
                            return message;
                        };

                        /**
                         * Creates a plain object from a MessageSegment message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.MessageSegment} message MessageSegment
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        MessageSegment.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.from = null;
                                object.until = null;
                                object.uri = "";
                            }
                            if (message.from != null && message.hasOwnProperty("from"))
                                object.from = $root.google.protobuf.Timestamp.toObject(message.from, options);
                            if (message.until != null && message.hasOwnProperty("until"))
                                object.until = $root.google.protobuf.Timestamp.toObject(message.until, options);
                            if (message.uri != null && message.hasOwnProperty("uri"))
                                object.uri = message.uri;
                            return object;
                        };

                        /**
                         * Converts this MessageSegment to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        MessageSegment.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for MessageSegment
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.service.edge.MessageSegment
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        MessageSegment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.service.edge.MessageSegment";
                        };

                        return MessageSegment;
                    })();

                    edge.ChunkedEntry = (function() {

                        /**
                         * Properties of a ChunkedEntry.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @interface IChunkedEntry
                         * @property {dwango.nicolive.chat.service.edge.IMessageSegment|null} [segment] ChunkedEntry segment
                         * @property {dwango.nicolive.chat.service.edge.IBackwardSegment|null} [backward] ChunkedEntry backward
                         * @property {dwango.nicolive.chat.service.edge.IMessageSegment|null} [previous] ChunkedEntry previous
                         * @property {dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext|null} [next] ChunkedEntry next
                         */

                        /**
                         * Constructs a new ChunkedEntry.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @classdesc ストリーミング配信されてくる各チャンク。
                         * 開始時刻を指定してサーバーへストリームをリクエストすると、開始時刻から一定時間内に発生したメッセージがすべてチャンクとして送られてくる。
                         * 開始時刻が過去の時刻の場合は指定時間内のすべてのチャンクが一瞬で送られてきて接続がすぐに終了する。
                         * 開始時刻が現在の時刻の場合は一定時間の間接続が開いたままとなり、発生したメッセージがリアルタイムにストリームで送られてくる。
                         * @implements IChunkedEntry
                         * @constructor
                         * @param {dwango.nicolive.chat.service.edge.IChunkedEntry=} [properties] Properties to set
                         */
                        function ChunkedEntry(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ChunkedEntry segment.
                         * @member {dwango.nicolive.chat.service.edge.IMessageSegment|null|undefined} segment
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @instance
                         */
                        ChunkedEntry.prototype.segment = null;

                        /**
                         * ChunkedEntry backward.
                         * @member {dwango.nicolive.chat.service.edge.IBackwardSegment|null|undefined} backward
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @instance
                         */
                        ChunkedEntry.prototype.backward = null;

                        /**
                         * ChunkedEntry previous.
                         * @member {dwango.nicolive.chat.service.edge.IMessageSegment|null|undefined} previous
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @instance
                         */
                        ChunkedEntry.prototype.previous = null;

                        /**
                         * ChunkedEntry next.
                         * @member {dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext|null|undefined} next
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @instance
                         */
                        ChunkedEntry.prototype.next = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * ChunkedEntry entry.
                         * @member {"segment"|"backward"|"previous"|"next"|undefined} entry
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @instance
                         */
                        Object.defineProperty(ChunkedEntry.prototype, "entry", {
                            get: $util.oneOfGetter($oneOfFields = ["segment", "backward", "previous", "next"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new ChunkedEntry instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IChunkedEntry=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.service.edge.ChunkedEntry} ChunkedEntry instance
                         */
                        ChunkedEntry.create = function create(properties) {
                            return new ChunkedEntry(properties);
                        };

                        /**
                         * Encodes the specified ChunkedEntry message. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedEntry.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IChunkedEntry} message ChunkedEntry message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ChunkedEntry.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.segment != null && Object.hasOwnProperty.call(message, "segment"))
                                $root.dwango.nicolive.chat.service.edge.MessageSegment.encode(message.segment, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.backward != null && Object.hasOwnProperty.call(message, "backward"))
                                $root.dwango.nicolive.chat.service.edge.BackwardSegment.encode(message.backward, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.previous != null && Object.hasOwnProperty.call(message, "previous"))
                                $root.dwango.nicolive.chat.service.edge.MessageSegment.encode(message.previous, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.next != null && Object.hasOwnProperty.call(message, "next"))
                                $root.dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext.encode(message.next, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified ChunkedEntry message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedEntry.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IChunkedEntry} message ChunkedEntry message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ChunkedEntry.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ChunkedEntry message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.service.edge.ChunkedEntry} ChunkedEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ChunkedEntry.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.service.edge.ChunkedEntry();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.segment = $root.dwango.nicolive.chat.service.edge.MessageSegment.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.backward = $root.dwango.nicolive.chat.service.edge.BackwardSegment.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.previous = $root.dwango.nicolive.chat.service.edge.MessageSegment.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        message.next = $root.dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ChunkedEntry message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.service.edge.ChunkedEntry} ChunkedEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ChunkedEntry.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ChunkedEntry message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ChunkedEntry.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.segment != null && message.hasOwnProperty("segment")) {
                                properties.entry = 1;
                                {
                                    var error = $root.dwango.nicolive.chat.service.edge.MessageSegment.verify(message.segment);
                                    if (error)
                                        return "segment." + error;
                                }
                            }
                            if (message.backward != null && message.hasOwnProperty("backward")) {
                                if (properties.entry === 1)
                                    return "entry: multiple values";
                                properties.entry = 1;
                                {
                                    var error = $root.dwango.nicolive.chat.service.edge.BackwardSegment.verify(message.backward);
                                    if (error)
                                        return "backward." + error;
                                }
                            }
                            if (message.previous != null && message.hasOwnProperty("previous")) {
                                if (properties.entry === 1)
                                    return "entry: multiple values";
                                properties.entry = 1;
                                {
                                    var error = $root.dwango.nicolive.chat.service.edge.MessageSegment.verify(message.previous);
                                    if (error)
                                        return "previous." + error;
                                }
                            }
                            if (message.next != null && message.hasOwnProperty("next")) {
                                if (properties.entry === 1)
                                    return "entry: multiple values";
                                properties.entry = 1;
                                {
                                    var error = $root.dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext.verify(message.next);
                                    if (error)
                                        return "next." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a ChunkedEntry message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.service.edge.ChunkedEntry} ChunkedEntry
                         */
                        ChunkedEntry.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.service.edge.ChunkedEntry)
                                return object;
                            var message = new $root.dwango.nicolive.chat.service.edge.ChunkedEntry();
                            if (object.segment != null) {
                                if (typeof object.segment !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.ChunkedEntry.segment: object expected");
                                message.segment = $root.dwango.nicolive.chat.service.edge.MessageSegment.fromObject(object.segment);
                            }
                            if (object.backward != null) {
                                if (typeof object.backward !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.ChunkedEntry.backward: object expected");
                                message.backward = $root.dwango.nicolive.chat.service.edge.BackwardSegment.fromObject(object.backward);
                            }
                            if (object.previous != null) {
                                if (typeof object.previous !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.ChunkedEntry.previous: object expected");
                                message.previous = $root.dwango.nicolive.chat.service.edge.MessageSegment.fromObject(object.previous);
                            }
                            if (object.next != null) {
                                if (typeof object.next !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.ChunkedEntry.next: object expected");
                                message.next = $root.dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext.fromObject(object.next);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a ChunkedEntry message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.ChunkedEntry} message ChunkedEntry
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ChunkedEntry.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.segment != null && message.hasOwnProperty("segment")) {
                                object.segment = $root.dwango.nicolive.chat.service.edge.MessageSegment.toObject(message.segment, options);
                                if (options.oneofs)
                                    object.entry = "segment";
                            }
                            if (message.backward != null && message.hasOwnProperty("backward")) {
                                object.backward = $root.dwango.nicolive.chat.service.edge.BackwardSegment.toObject(message.backward, options);
                                if (options.oneofs)
                                    object.entry = "backward";
                            }
                            if (message.previous != null && message.hasOwnProperty("previous")) {
                                object.previous = $root.dwango.nicolive.chat.service.edge.MessageSegment.toObject(message.previous, options);
                                if (options.oneofs)
                                    object.entry = "previous";
                            }
                            if (message.next != null && message.hasOwnProperty("next")) {
                                object.next = $root.dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext.toObject(message.next, options);
                                if (options.oneofs)
                                    object.entry = "next";
                            }
                            return object;
                        };

                        /**
                         * Converts this ChunkedEntry to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ChunkedEntry.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ChunkedEntry
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ChunkedEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.service.edge.ChunkedEntry";
                        };

                        ChunkedEntry.ReadyForNext = (function() {

                            /**
                             * Properties of a ReadyForNext.
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                             * @interface IReadyForNext
                             * @property {number|Long|null} [at] ReadyForNext at
                             */

                            /**
                             * Constructs a new ReadyForNext.
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry
                             * @classdesc * 次のストリームの開始時刻を表すチャンク。必ずストリームの末尾に送られてくる。
                             * @implements IReadyForNext
                             * @constructor
                             * @param {dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext=} [properties] Properties to set
                             */
                            function ReadyForNext(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * ReadyForNext at.
                             * @member {number|Long} at
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @instance
                             */
                            ReadyForNext.prototype.at = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                            /**
                             * Creates a new ReadyForNext instance using the specified properties.
                             * @function create
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext=} [properties] Properties to set
                             * @returns {dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext} ReadyForNext instance
                             */
                            ReadyForNext.create = function create(properties) {
                                return new ReadyForNext(properties);
                            };

                            /**
                             * Encodes the specified ReadyForNext message. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext.verify|verify} messages.
                             * @function encode
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext} message ReadyForNext message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ReadyForNext.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.at != null && Object.hasOwnProperty.call(message, "at"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.at);
                                return writer;
                            };

                            /**
                             * Encodes the specified ReadyForNext message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext} message ReadyForNext message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ReadyForNext.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a ReadyForNext message from the specified reader or buffer.
                             * @function decode
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext} ReadyForNext
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ReadyForNext.decode = function decode(reader, length, error) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    if (tag === error)
                                        break;
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.at = reader.int64();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a ReadyForNext message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext} ReadyForNext
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ReadyForNext.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a ReadyForNext message.
                             * @function verify
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            ReadyForNext.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.at != null && message.hasOwnProperty("at"))
                                    if (!$util.isInteger(message.at) && !(message.at && $util.isInteger(message.at.low) && $util.isInteger(message.at.high)))
                                        return "at: integer|Long expected";
                                return null;
                            };

                            /**
                             * Creates a ReadyForNext message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext} ReadyForNext
                             */
                            ReadyForNext.fromObject = function fromObject(object) {
                                if (object instanceof $root.dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext)
                                    return object;
                                var message = new $root.dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext();
                                if (object.at != null)
                                    if ($util.Long)
                                        (message.at = $util.Long.fromValue(object.at)).unsigned = false;
                                    else if (typeof object.at === "string")
                                        message.at = parseInt(object.at, 10);
                                    else if (typeof object.at === "number")
                                        message.at = object.at;
                                    else if (typeof object.at === "object")
                                        message.at = new $util.LongBits(object.at.low >>> 0, object.at.high >>> 0).toNumber();
                                return message;
                            };

                            /**
                             * Creates a plain object from a ReadyForNext message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext} message ReadyForNext
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            ReadyForNext.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults)
                                    if ($util.Long) {
                                        var long = new $util.Long(0, 0, false);
                                        object.at = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                    } else
                                        object.at = options.longs === String ? "0" : 0;
                                if (message.at != null && message.hasOwnProperty("at"))
                                    if (typeof message.at === "number")
                                        object.at = options.longs === String ? String(message.at) : message.at;
                                    else
                                        object.at = options.longs === String ? $util.Long.prototype.toString.call(message.at) : options.longs === Number ? new $util.LongBits(message.at.low >>> 0, message.at.high >>> 0).toNumber() : message.at;
                                return object;
                            };

                            /**
                             * Converts this ReadyForNext to JSON.
                             * @function toJSON
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            ReadyForNext.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for ReadyForNext
                             * @function getTypeUrl
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            ReadyForNext.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext";
                            };

                            return ReadyForNext;
                        })();

                        return ChunkedEntry;
                    })();

                    edge.BackwardSegment = (function() {

                        /**
                         * Properties of a BackwardSegment.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @interface IBackwardSegment
                         * @property {google.protobuf.ITimestamp|null} [until] BackwardSegment until
                         * @property {dwango.nicolive.chat.service.edge.PackedSegment.INext|null} [segment] BackwardSegment segment
                         * @property {dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot|null} [snapshot] BackwardSegment snapshot
                         */

                        /**
                         * Constructs a new BackwardSegment.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @classdesc ストリーム開始以前のメッセージを表すチャンク。必ずストリームの先頭に送られてくる。
                         * @implements IBackwardSegment
                         * @constructor
                         * @param {dwango.nicolive.chat.service.edge.IBackwardSegment=} [properties] Properties to set
                         */
                        function BackwardSegment(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BackwardSegment until.
                         * @member {google.protobuf.ITimestamp|null|undefined} until
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @instance
                         */
                        BackwardSegment.prototype.until = null;

                        /**
                         * BackwardSegment segment.
                         * @member {dwango.nicolive.chat.service.edge.PackedSegment.INext|null|undefined} segment
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @instance
                         */
                        BackwardSegment.prototype.segment = null;

                        /**
                         * BackwardSegment snapshot.
                         * @member {dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot|null|undefined} snapshot
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @instance
                         */
                        BackwardSegment.prototype.snapshot = null;

                        /**
                         * Creates a new BackwardSegment instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IBackwardSegment=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.service.edge.BackwardSegment} BackwardSegment instance
                         */
                        BackwardSegment.create = function create(properties) {
                            return new BackwardSegment(properties);
                        };

                        /**
                         * Encodes the specified BackwardSegment message. Does not implicitly {@link dwango.nicolive.chat.service.edge.BackwardSegment.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IBackwardSegment} message BackwardSegment message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BackwardSegment.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.until != null && Object.hasOwnProperty.call(message, "until"))
                                $root.google.protobuf.Timestamp.encode(message.until, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.segment != null && Object.hasOwnProperty.call(message, "segment"))
                                $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.encode(message.segment, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.snapshot != null && Object.hasOwnProperty.call(message, "snapshot"))
                                $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.encode(message.snapshot, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified BackwardSegment message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.BackwardSegment.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IBackwardSegment} message BackwardSegment message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BackwardSegment.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a BackwardSegment message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.service.edge.BackwardSegment} BackwardSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BackwardSegment.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.service.edge.BackwardSegment();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.until = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.segment = $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.snapshot = $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a BackwardSegment message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.service.edge.BackwardSegment} BackwardSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BackwardSegment.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a BackwardSegment message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BackwardSegment.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.until != null && message.hasOwnProperty("until")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.until);
                                if (error)
                                    return "until." + error;
                            }
                            if (message.segment != null && message.hasOwnProperty("segment")) {
                                var error = $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.verify(message.segment);
                                if (error)
                                    return "segment." + error;
                            }
                            if (message.snapshot != null && message.hasOwnProperty("snapshot")) {
                                var error = $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.verify(message.snapshot);
                                if (error)
                                    return "snapshot." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a BackwardSegment message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.service.edge.BackwardSegment} BackwardSegment
                         */
                        BackwardSegment.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.service.edge.BackwardSegment)
                                return object;
                            var message = new $root.dwango.nicolive.chat.service.edge.BackwardSegment();
                            if (object.until != null) {
                                if (typeof object.until !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.BackwardSegment.until: object expected");
                                message.until = $root.google.protobuf.Timestamp.fromObject(object.until);
                            }
                            if (object.segment != null) {
                                if (typeof object.segment !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.BackwardSegment.segment: object expected");
                                message.segment = $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.fromObject(object.segment);
                            }
                            if (object.snapshot != null) {
                                if (typeof object.snapshot !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.BackwardSegment.snapshot: object expected");
                                message.snapshot = $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.fromObject(object.snapshot);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a BackwardSegment message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.BackwardSegment} message BackwardSegment
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BackwardSegment.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.until = null;
                                object.segment = null;
                                object.snapshot = null;
                            }
                            if (message.until != null && message.hasOwnProperty("until"))
                                object.until = $root.google.protobuf.Timestamp.toObject(message.until, options);
                            if (message.segment != null && message.hasOwnProperty("segment"))
                                object.segment = $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.toObject(message.segment, options);
                            if (message.snapshot != null && message.hasOwnProperty("snapshot"))
                                object.snapshot = $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.toObject(message.snapshot, options);
                            return object;
                        };

                        /**
                         * Converts this BackwardSegment to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BackwardSegment.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for BackwardSegment
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.service.edge.BackwardSegment
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        BackwardSegment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.service.edge.BackwardSegment";
                        };

                        return BackwardSegment;
                    })();

                    edge.PackedSegment = (function() {

                        /**
                         * Properties of a PackedSegment.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @interface IPackedSegment
                         * @property {Array.<dwango.nicolive.chat.service.edge.IChunkedMessage>|null} [messages] PackedSegment messages
                         * @property {dwango.nicolive.chat.service.edge.PackedSegment.INext|null} [next] PackedSegment next
                         * @property {dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot|null} [snapshot] PackedSegment snapshot
                         */

                        /**
                         * Constructs a new PackedSegment.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @classdesc Represents a PackedSegment.
                         * @implements IPackedSegment
                         * @constructor
                         * @param {dwango.nicolive.chat.service.edge.IPackedSegment=} [properties] Properties to set
                         */
                        function PackedSegment(properties) {
                            this.messages = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * PackedSegment messages.
                         * @member {Array.<dwango.nicolive.chat.service.edge.IChunkedMessage>} messages
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @instance
                         */
                        PackedSegment.prototype.messages = $util.emptyArray;

                        /**
                         * PackedSegment next.
                         * @member {dwango.nicolive.chat.service.edge.PackedSegment.INext|null|undefined} next
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @instance
                         */
                        PackedSegment.prototype.next = null;

                        /**
                         * PackedSegment snapshot.
                         * @member {dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot|null|undefined} snapshot
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @instance
                         */
                        PackedSegment.prototype.snapshot = null;

                        /**
                         * Creates a new PackedSegment instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IPackedSegment=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.service.edge.PackedSegment} PackedSegment instance
                         */
                        PackedSegment.create = function create(properties) {
                            return new PackedSegment(properties);
                        };

                        /**
                         * Encodes the specified PackedSegment message. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IPackedSegment} message PackedSegment message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PackedSegment.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.messages != null && message.messages.length)
                                for (var i = 0; i < message.messages.length; ++i)
                                    $root.dwango.nicolive.chat.service.edge.ChunkedMessage.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.next != null && Object.hasOwnProperty.call(message, "next"))
                                $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.encode(message.next, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.snapshot != null && Object.hasOwnProperty.call(message, "snapshot"))
                                $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.encode(message.snapshot, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified PackedSegment message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IPackedSegment} message PackedSegment message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PackedSegment.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a PackedSegment message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.service.edge.PackedSegment} PackedSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PackedSegment.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.service.edge.PackedSegment();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.messages && message.messages.length))
                                            message.messages = [];
                                        message.messages.push($root.dwango.nicolive.chat.service.edge.ChunkedMessage.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 2: {
                                        message.next = $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.snapshot = $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a PackedSegment message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.service.edge.PackedSegment} PackedSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PackedSegment.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a PackedSegment message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PackedSegment.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.messages != null && message.hasOwnProperty("messages")) {
                                if (!Array.isArray(message.messages))
                                    return "messages: array expected";
                                for (var i = 0; i < message.messages.length; ++i) {
                                    var error = $root.dwango.nicolive.chat.service.edge.ChunkedMessage.verify(message.messages[i]);
                                    if (error)
                                        return "messages." + error;
                                }
                            }
                            if (message.next != null && message.hasOwnProperty("next")) {
                                var error = $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.verify(message.next);
                                if (error)
                                    return "next." + error;
                            }
                            if (message.snapshot != null && message.hasOwnProperty("snapshot")) {
                                var error = $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.verify(message.snapshot);
                                if (error)
                                    return "snapshot." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a PackedSegment message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.service.edge.PackedSegment} PackedSegment
                         */
                        PackedSegment.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.service.edge.PackedSegment)
                                return object;
                            var message = new $root.dwango.nicolive.chat.service.edge.PackedSegment();
                            if (object.messages) {
                                if (!Array.isArray(object.messages))
                                    throw TypeError(".dwango.nicolive.chat.service.edge.PackedSegment.messages: array expected");
                                message.messages = [];
                                for (var i = 0; i < object.messages.length; ++i) {
                                    if (typeof object.messages[i] !== "object")
                                        throw TypeError(".dwango.nicolive.chat.service.edge.PackedSegment.messages: object expected");
                                    message.messages[i] = $root.dwango.nicolive.chat.service.edge.ChunkedMessage.fromObject(object.messages[i]);
                                }
                            }
                            if (object.next != null) {
                                if (typeof object.next !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.PackedSegment.next: object expected");
                                message.next = $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.fromObject(object.next);
                            }
                            if (object.snapshot != null) {
                                if (typeof object.snapshot !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.PackedSegment.snapshot: object expected");
                                message.snapshot = $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.fromObject(object.snapshot);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a PackedSegment message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.PackedSegment} message PackedSegment
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PackedSegment.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.messages = [];
                            if (options.defaults) {
                                object.next = null;
                                object.snapshot = null;
                            }
                            if (message.messages && message.messages.length) {
                                object.messages = [];
                                for (var j = 0; j < message.messages.length; ++j)
                                    object.messages[j] = $root.dwango.nicolive.chat.service.edge.ChunkedMessage.toObject(message.messages[j], options);
                            }
                            if (message.next != null && message.hasOwnProperty("next"))
                                object.next = $root.dwango.nicolive.chat.service.edge.PackedSegment.Next.toObject(message.next, options);
                            if (message.snapshot != null && message.hasOwnProperty("snapshot"))
                                object.snapshot = $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.toObject(message.snapshot, options);
                            return object;
                        };

                        /**
                         * Converts this PackedSegment to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PackedSegment.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for PackedSegment
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        PackedSegment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.service.edge.PackedSegment";
                        };

                        PackedSegment.Next = (function() {

                            /**
                             * Properties of a Next.
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                             * @interface INext
                             * @property {string|null} [uri] Next uri
                             */

                            /**
                             * Constructs a new Next.
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                             * @classdesc Represents a Next.
                             * @implements INext
                             * @constructor
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.INext=} [properties] Properties to set
                             */
                            function Next(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Next uri.
                             * @member {string} uri
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @instance
                             */
                            Next.prototype.uri = "";

                            /**
                             * Creates a new Next instance using the specified properties.
                             * @function create
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.INext=} [properties] Properties to set
                             * @returns {dwango.nicolive.chat.service.edge.PackedSegment.Next} Next instance
                             */
                            Next.create = function create(properties) {
                                return new Next(properties);
                            };

                            /**
                             * Encodes the specified Next message. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.Next.verify|verify} messages.
                             * @function encode
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.INext} message Next message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Next.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
                                return writer;
                            };

                            /**
                             * Encodes the specified Next message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.Next.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.INext} message Next message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Next.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a Next message from the specified reader or buffer.
                             * @function decode
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {dwango.nicolive.chat.service.edge.PackedSegment.Next} Next
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Next.decode = function decode(reader, length, error) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.service.edge.PackedSegment.Next();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    if (tag === error)
                                        break;
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.uri = reader.string();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Next message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {dwango.nicolive.chat.service.edge.PackedSegment.Next} Next
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Next.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a Next message.
                             * @function verify
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Next.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.uri != null && message.hasOwnProperty("uri"))
                                    if (!$util.isString(message.uri))
                                        return "uri: string expected";
                                return null;
                            };

                            /**
                             * Creates a Next message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {dwango.nicolive.chat.service.edge.PackedSegment.Next} Next
                             */
                            Next.fromObject = function fromObject(object) {
                                if (object instanceof $root.dwango.nicolive.chat.service.edge.PackedSegment.Next)
                                    return object;
                                var message = new $root.dwango.nicolive.chat.service.edge.PackedSegment.Next();
                                if (object.uri != null)
                                    message.uri = String(object.uri);
                                return message;
                            };

                            /**
                             * Creates a plain object from a Next message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.Next} message Next
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Next.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults)
                                    object.uri = "";
                                if (message.uri != null && message.hasOwnProperty("uri"))
                                    object.uri = message.uri;
                                return object;
                            };

                            /**
                             * Converts this Next to JSON.
                             * @function toJSON
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Next.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for Next
                             * @function getTypeUrl
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.Next
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Next.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/dwango.nicolive.chat.service.edge.PackedSegment.Next";
                            };

                            return Next;
                        })();

                        PackedSegment.StateSnapshot = (function() {

                            /**
                             * Properties of a StateSnapshot.
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                             * @interface IStateSnapshot
                             * @property {string|null} [uri] StateSnapshot uri
                             */

                            /**
                             * Constructs a new StateSnapshot.
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment
                             * @classdesc Represents a StateSnapshot.
                             * @implements IStateSnapshot
                             * @constructor
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot=} [properties] Properties to set
                             */
                            function StateSnapshot(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * StateSnapshot uri.
                             * @member {string} uri
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @instance
                             */
                            StateSnapshot.prototype.uri = "";

                            /**
                             * Creates a new StateSnapshot instance using the specified properties.
                             * @function create
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot=} [properties] Properties to set
                             * @returns {dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot} StateSnapshot instance
                             */
                            StateSnapshot.create = function create(properties) {
                                return new StateSnapshot(properties);
                            };

                            /**
                             * Encodes the specified StateSnapshot message. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.verify|verify} messages.
                             * @function encode
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot} message StateSnapshot message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            StateSnapshot.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
                                return writer;
                            };

                            /**
                             * Encodes the specified StateSnapshot message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot} message StateSnapshot message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            StateSnapshot.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a StateSnapshot message from the specified reader or buffer.
                             * @function decode
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot} StateSnapshot
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            StateSnapshot.decode = function decode(reader, length, error) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    if (tag === error)
                                        break;
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.uri = reader.string();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a StateSnapshot message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot} StateSnapshot
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            StateSnapshot.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a StateSnapshot message.
                             * @function verify
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            StateSnapshot.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.uri != null && message.hasOwnProperty("uri"))
                                    if (!$util.isString(message.uri))
                                        return "uri: string expected";
                                return null;
                            };

                            /**
                             * Creates a StateSnapshot message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot} StateSnapshot
                             */
                            StateSnapshot.fromObject = function fromObject(object) {
                                if (object instanceof $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot)
                                    return object;
                                var message = new $root.dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot();
                                if (object.uri != null)
                                    message.uri = String(object.uri);
                                return message;
                            };

                            /**
                             * Creates a plain object from a StateSnapshot message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot} message StateSnapshot
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            StateSnapshot.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults)
                                    object.uri = "";
                                if (message.uri != null && message.hasOwnProperty("uri"))
                                    object.uri = message.uri;
                                return object;
                            };

                            /**
                             * Converts this StateSnapshot to JSON.
                             * @function toJSON
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            StateSnapshot.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for StateSnapshot
                             * @function getTypeUrl
                             * @memberof dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            StateSnapshot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot";
                            };

                            return StateSnapshot;
                        })();

                        return PackedSegment;
                    })();

                    edge.ChunkedMessage = (function() {

                        /**
                         * Properties of a ChunkedMessage.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @interface IChunkedMessage
                         * @property {dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta|null} [meta] ChunkedMessage meta
                         * @property {dwango.nicolive.chat.data.INicoliveMessage|null} [message] ChunkedMessage message
                         * @property {dwango.nicolive.chat.data.INicoliveState|null} [state] ChunkedMessage state
                         * @property {dwango.nicolive.chat.service.edge.ChunkedMessage.Signal|null} [signal] ChunkedMessage signal
                         */

                        /**
                         * Constructs a new ChunkedMessage.
                         * @memberof dwango.nicolive.chat.service.edge
                         * @classdesc Represents a ChunkedMessage.
                         * @implements IChunkedMessage
                         * @constructor
                         * @param {dwango.nicolive.chat.service.edge.IChunkedMessage=} [properties] Properties to set
                         */
                        function ChunkedMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ChunkedMessage meta.
                         * @member {dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta|null|undefined} meta
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @instance
                         */
                        ChunkedMessage.prototype.meta = null;

                        /**
                         * ChunkedMessage message.
                         * @member {dwango.nicolive.chat.data.INicoliveMessage|null|undefined} message
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @instance
                         */
                        ChunkedMessage.prototype.message = null;

                        /**
                         * ChunkedMessage state.
                         * @member {dwango.nicolive.chat.data.INicoliveState|null|undefined} state
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @instance
                         */
                        ChunkedMessage.prototype.state = null;

                        /**
                         * ChunkedMessage signal.
                         * @member {dwango.nicolive.chat.service.edge.ChunkedMessage.Signal|null|undefined} signal
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @instance
                         */
                        ChunkedMessage.prototype.signal = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * ChunkedMessage payload.
                         * @member {"message"|"state"|"signal"|undefined} payload
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @instance
                         */
                        Object.defineProperty(ChunkedMessage.prototype, "payload", {
                            get: $util.oneOfGetter($oneOfFields = ["message", "state", "signal"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new ChunkedMessage instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IChunkedMessage=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.service.edge.ChunkedMessage} ChunkedMessage instance
                         */
                        ChunkedMessage.create = function create(properties) {
                            return new ChunkedMessage(properties);
                        };

                        /**
                         * Encodes the specified ChunkedMessage message. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedMessage.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IChunkedMessage} message ChunkedMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ChunkedMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                                $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                                $root.dwango.nicolive.chat.data.NicoliveMessage.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                                $root.dwango.nicolive.chat.data.NicoliveState.encode(message.state, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.signal != null && Object.hasOwnProperty.call(message, "signal"))
                                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.signal);
                            return writer;
                        };

                        /**
                         * Encodes the specified ChunkedMessage message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.IChunkedMessage} message ChunkedMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ChunkedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ChunkedMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.service.edge.ChunkedMessage} ChunkedMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ChunkedMessage.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.service.edge.ChunkedMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.meta = $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.message = $root.dwango.nicolive.chat.data.NicoliveMessage.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        message.state = $root.dwango.nicolive.chat.data.NicoliveState.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 5: {
                                        message.signal = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ChunkedMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.service.edge.ChunkedMessage} ChunkedMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ChunkedMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ChunkedMessage message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ChunkedMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.meta != null && message.hasOwnProperty("meta")) {
                                var error = $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.verify(message.meta);
                                if (error)
                                    return "meta." + error;
                            }
                            if (message.message != null && message.hasOwnProperty("message")) {
                                properties.payload = 1;
                                {
                                    var error = $root.dwango.nicolive.chat.data.NicoliveMessage.verify(message.message);
                                    if (error)
                                        return "message." + error;
                                }
                            }
                            if (message.state != null && message.hasOwnProperty("state")) {
                                if (properties.payload === 1)
                                    return "payload: multiple values";
                                properties.payload = 1;
                                {
                                    var error = $root.dwango.nicolive.chat.data.NicoliveState.verify(message.state);
                                    if (error)
                                        return "state." + error;
                                }
                            }
                            if (message.signal != null && message.hasOwnProperty("signal")) {
                                if (properties.payload === 1)
                                    return "payload: multiple values";
                                properties.payload = 1;
                                switch (message.signal) {
                                default:
                                    return "signal: enum value expected";
                                case 0:
                                    break;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a ChunkedMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.service.edge.ChunkedMessage} ChunkedMessage
                         */
                        ChunkedMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.service.edge.ChunkedMessage)
                                return object;
                            var message = new $root.dwango.nicolive.chat.service.edge.ChunkedMessage();
                            if (object.meta != null) {
                                if (typeof object.meta !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.ChunkedMessage.meta: object expected");
                                message.meta = $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.fromObject(object.meta);
                            }
                            if (object.message != null) {
                                if (typeof object.message !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.ChunkedMessage.message: object expected");
                                message.message = $root.dwango.nicolive.chat.data.NicoliveMessage.fromObject(object.message);
                            }
                            if (object.state != null) {
                                if (typeof object.state !== "object")
                                    throw TypeError(".dwango.nicolive.chat.service.edge.ChunkedMessage.state: object expected");
                                message.state = $root.dwango.nicolive.chat.data.NicoliveState.fromObject(object.state);
                            }
                            switch (object.signal) {
                            default:
                                if (typeof object.signal === "number") {
                                    message.signal = object.signal;
                                    break;
                                }
                                break;
                            case "Flushed":
                            case 0:
                                message.signal = 0;
                                break;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a ChunkedMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @static
                         * @param {dwango.nicolive.chat.service.edge.ChunkedMessage} message ChunkedMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ChunkedMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.meta = null;
                            if (message.meta != null && message.hasOwnProperty("meta"))
                                object.meta = $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.toObject(message.meta, options);
                            if (message.message != null && message.hasOwnProperty("message")) {
                                object.message = $root.dwango.nicolive.chat.data.NicoliveMessage.toObject(message.message, options);
                                if (options.oneofs)
                                    object.payload = "message";
                            }
                            if (message.state != null && message.hasOwnProperty("state")) {
                                object.state = $root.dwango.nicolive.chat.data.NicoliveState.toObject(message.state, options);
                                if (options.oneofs)
                                    object.payload = "state";
                            }
                            if (message.signal != null && message.hasOwnProperty("signal")) {
                                object.signal = options.enums === String ? $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Signal[message.signal] === undefined ? message.signal : $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Signal[message.signal] : message.signal;
                                if (options.oneofs)
                                    object.payload = "signal";
                            }
                            return object;
                        };

                        /**
                         * Converts this ChunkedMessage to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ChunkedMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ChunkedMessage
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ChunkedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.service.edge.ChunkedMessage";
                        };

                        /**
                         * Signal enum.
                         * @name dwango.nicolive.chat.service.edge.ChunkedMessage.Signal
                         * @enum {number}
                         * @property {number} Flushed=0 Flushed value
                         */
                        ChunkedMessage.Signal = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "Flushed"] = 0;
                            return values;
                        })();

                        ChunkedMessage.Meta = (function() {

                            /**
                             * Properties of a Meta.
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                             * @interface IMeta
                             * @property {string|null} [id] Meta id
                             * @property {google.protobuf.ITimestamp|null} [at] Meta at
                             * @property {dwango.nicolive.chat.data.INicoliveOrigin|null} [origin] Meta origin
                             */

                            /**
                             * Constructs a new Meta.
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage
                             * @classdesc Represents a Meta.
                             * @implements IMeta
                             * @constructor
                             * @param {dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta=} [properties] Properties to set
                             */
                            function Meta(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Meta id.
                             * @member {string} id
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @instance
                             */
                            Meta.prototype.id = "";

                            /**
                             * Meta at.
                             * @member {google.protobuf.ITimestamp|null|undefined} at
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @instance
                             */
                            Meta.prototype.at = null;

                            /**
                             * Meta origin.
                             * @member {dwango.nicolive.chat.data.INicoliveOrigin|null|undefined} origin
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @instance
                             */
                            Meta.prototype.origin = null;

                            /**
                             * Creates a new Meta instance using the specified properties.
                             * @function create
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta=} [properties] Properties to set
                             * @returns {dwango.nicolive.chat.service.edge.ChunkedMessage.Meta} Meta instance
                             */
                            Meta.create = function create(properties) {
                                return new Meta(properties);
                            };

                            /**
                             * Encodes the specified Meta message. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.verify|verify} messages.
                             * @function encode
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta} message Meta message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Meta.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                                if (message.at != null && Object.hasOwnProperty.call(message, "at"))
                                    $root.google.protobuf.Timestamp.encode(message.at, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.origin != null && Object.hasOwnProperty.call(message, "origin"))
                                    $root.dwango.nicolive.chat.data.NicoliveOrigin.encode(message.origin, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                                return writer;
                            };

                            /**
                             * Encodes the specified Meta message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta} message Meta message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Meta.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a Meta message from the specified reader or buffer.
                             * @function decode
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {dwango.nicolive.chat.service.edge.ChunkedMessage.Meta} Meta
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Meta.decode = function decode(reader, length, error) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Meta();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    if (tag === error)
                                        break;
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.id = reader.string();
                                            break;
                                        }
                                    case 2: {
                                            message.at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                            break;
                                        }
                                    case 3: {
                                            message.origin = $root.dwango.nicolive.chat.data.NicoliveOrigin.decode(reader, reader.uint32());
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Meta message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {dwango.nicolive.chat.service.edge.ChunkedMessage.Meta} Meta
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Meta.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a Meta message.
                             * @function verify
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Meta.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.id != null && message.hasOwnProperty("id"))
                                    if (!$util.isString(message.id))
                                        return "id: string expected";
                                if (message.at != null && message.hasOwnProperty("at")) {
                                    var error = $root.google.protobuf.Timestamp.verify(message.at);
                                    if (error)
                                        return "at." + error;
                                }
                                if (message.origin != null && message.hasOwnProperty("origin")) {
                                    var error = $root.dwango.nicolive.chat.data.NicoliveOrigin.verify(message.origin);
                                    if (error)
                                        return "origin." + error;
                                }
                                return null;
                            };

                            /**
                             * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {dwango.nicolive.chat.service.edge.ChunkedMessage.Meta} Meta
                             */
                            Meta.fromObject = function fromObject(object) {
                                if (object instanceof $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Meta)
                                    return object;
                                var message = new $root.dwango.nicolive.chat.service.edge.ChunkedMessage.Meta();
                                if (object.id != null)
                                    message.id = String(object.id);
                                if (object.at != null) {
                                    if (typeof object.at !== "object")
                                        throw TypeError(".dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.at: object expected");
                                    message.at = $root.google.protobuf.Timestamp.fromObject(object.at);
                                }
                                if (object.origin != null) {
                                    if (typeof object.origin !== "object")
                                        throw TypeError(".dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.origin: object expected");
                                    message.origin = $root.dwango.nicolive.chat.data.NicoliveOrigin.fromObject(object.origin);
                                }
                                return message;
                            };

                            /**
                             * Creates a plain object from a Meta message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @static
                             * @param {dwango.nicolive.chat.service.edge.ChunkedMessage.Meta} message Meta
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Meta.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.id = "";
                                    object.at = null;
                                    object.origin = null;
                                }
                                if (message.id != null && message.hasOwnProperty("id"))
                                    object.id = message.id;
                                if (message.at != null && message.hasOwnProperty("at"))
                                    object.at = $root.google.protobuf.Timestamp.toObject(message.at, options);
                                if (message.origin != null && message.hasOwnProperty("origin"))
                                    object.origin = $root.dwango.nicolive.chat.data.NicoliveOrigin.toObject(message.origin, options);
                                return object;
                            };

                            /**
                             * Converts this Meta to JSON.
                             * @function toJSON
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Meta.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for Meta
                             * @function getTypeUrl
                             * @memberof dwango.nicolive.chat.service.edge.ChunkedMessage.Meta
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Meta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/dwango.nicolive.chat.service.edge.ChunkedMessage.Meta";
                            };

                            return Meta;
                        })();

                        return ChunkedMessage;
                    })();

                    return edge;
                })();

                return service;
            })();

            chat.data = (function() {

                /**
                 * Namespace data.
                 * @memberof dwango.nicolive.chat
                 * @namespace
                 */
                var data = {};

                data.NicoliveMessage = (function() {

                    /**
                     * Properties of a NicoliveMessage.
                     * @memberof dwango.nicolive.chat.data
                     * @interface INicoliveMessage
                     * @property {dwango.nicolive.chat.data.IChat|null} [chat] NicoliveMessage chat
                     * @property {dwango.nicolive.chat.data.ISimpleNotification|null} [simpleNotification] NicoliveMessage simpleNotification
                     * @property {dwango.nicolive.chat.data.IGift|null} [gift] NicoliveMessage gift
                     * @property {dwango.nicolive.chat.data.INicoad|null} [nicoad] NicoliveMessage nicoad
                     * @property {dwango.nicolive.chat.data.IGameUpdate|null} [gameUpdate] NicoliveMessage gameUpdate
                     * @property {dwango.nicolive.chat.data.ITagUpdated|null} [tagUpdated] NicoliveMessage tagUpdated
                     * @property {dwango.nicolive.chat.data.atoms.IModeratorUpdated|null} [moderatorUpdated] NicoliveMessage moderatorUpdated
                     * @property {dwango.nicolive.chat.data.atoms.ISSNGUpdated|null} [ssngUpdated] NicoliveMessage ssngUpdated
                     * @property {dwango.nicolive.chat.data.IChat|null} [overflowedChat] NicoliveMessage overflowedChat
                     */

                    /**
                     * Constructs a new NicoliveMessage.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a NicoliveMessage.
                     * @implements INicoliveMessage
                     * @constructor
                     * @param {dwango.nicolive.chat.data.INicoliveMessage=} [properties] Properties to set
                     */
                    function NicoliveMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * NicoliveMessage chat.
                     * @member {dwango.nicolive.chat.data.IChat|null|undefined} chat
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    NicoliveMessage.prototype.chat = null;

                    /**
                     * NicoliveMessage simpleNotification.
                     * @member {dwango.nicolive.chat.data.ISimpleNotification|null|undefined} simpleNotification
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    NicoliveMessage.prototype.simpleNotification = null;

                    /**
                     * NicoliveMessage gift.
                     * @member {dwango.nicolive.chat.data.IGift|null|undefined} gift
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    NicoliveMessage.prototype.gift = null;

                    /**
                     * NicoliveMessage nicoad.
                     * @member {dwango.nicolive.chat.data.INicoad|null|undefined} nicoad
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    NicoliveMessage.prototype.nicoad = null;

                    /**
                     * NicoliveMessage gameUpdate.
                     * @member {dwango.nicolive.chat.data.IGameUpdate|null|undefined} gameUpdate
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    NicoliveMessage.prototype.gameUpdate = null;

                    /**
                     * NicoliveMessage tagUpdated.
                     * @member {dwango.nicolive.chat.data.ITagUpdated|null|undefined} tagUpdated
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    NicoliveMessage.prototype.tagUpdated = null;

                    /**
                     * NicoliveMessage moderatorUpdated.
                     * @member {dwango.nicolive.chat.data.atoms.IModeratorUpdated|null|undefined} moderatorUpdated
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    NicoliveMessage.prototype.moderatorUpdated = null;

                    /**
                     * NicoliveMessage ssngUpdated.
                     * @member {dwango.nicolive.chat.data.atoms.ISSNGUpdated|null|undefined} ssngUpdated
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    NicoliveMessage.prototype.ssngUpdated = null;

                    /**
                     * NicoliveMessage overflowedChat.
                     * @member {dwango.nicolive.chat.data.IChat|null|undefined} overflowedChat
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    NicoliveMessage.prototype.overflowedChat = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * NicoliveMessage data.
                     * @member {"chat"|"simpleNotification"|"gift"|"nicoad"|"gameUpdate"|"tagUpdated"|"moderatorUpdated"|"ssngUpdated"|"overflowedChat"|undefined} data
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     */
                    Object.defineProperty(NicoliveMessage.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["chat", "simpleNotification", "gift", "nicoad", "gameUpdate", "tagUpdated", "moderatorUpdated", "ssngUpdated", "overflowedChat"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new NicoliveMessage instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoliveMessage=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.NicoliveMessage} NicoliveMessage instance
                     */
                    NicoliveMessage.create = function create(properties) {
                        return new NicoliveMessage(properties);
                    };

                    /**
                     * Encodes the specified NicoliveMessage message. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveMessage.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoliveMessage} message NicoliveMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NicoliveMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.chat != null && Object.hasOwnProperty.call(message, "chat"))
                            $root.dwango.nicolive.chat.data.Chat.encode(message.chat, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.simpleNotification != null && Object.hasOwnProperty.call(message, "simpleNotification"))
                            $root.dwango.nicolive.chat.data.SimpleNotification.encode(message.simpleNotification, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.gift != null && Object.hasOwnProperty.call(message, "gift"))
                            $root.dwango.nicolive.chat.data.Gift.encode(message.gift, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.nicoad != null && Object.hasOwnProperty.call(message, "nicoad"))
                            $root.dwango.nicolive.chat.data.Nicoad.encode(message.nicoad, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.gameUpdate != null && Object.hasOwnProperty.call(message, "gameUpdate"))
                            $root.dwango.nicolive.chat.data.GameUpdate.encode(message.gameUpdate, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                        if (message.tagUpdated != null && Object.hasOwnProperty.call(message, "tagUpdated"))
                            $root.dwango.nicolive.chat.data.TagUpdated.encode(message.tagUpdated, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                        if (message.moderatorUpdated != null && Object.hasOwnProperty.call(message, "moderatorUpdated"))
                            $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated.encode(message.moderatorUpdated, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                        if (message.ssngUpdated != null && Object.hasOwnProperty.call(message, "ssngUpdated"))
                            $root.dwango.nicolive.chat.data.atoms.SSNGUpdated.encode(message.ssngUpdated, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                        if (message.overflowedChat != null && Object.hasOwnProperty.call(message, "overflowedChat"))
                            $root.dwango.nicolive.chat.data.Chat.encode(message.overflowedChat, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified NicoliveMessage message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoliveMessage} message NicoliveMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NicoliveMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a NicoliveMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.NicoliveMessage} NicoliveMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NicoliveMessage.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.NicoliveMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.chat = $root.dwango.nicolive.chat.data.Chat.decode(reader, reader.uint32());
                                    break;
                                }
                            case 7: {
                                    message.simpleNotification = $root.dwango.nicolive.chat.data.SimpleNotification.decode(reader, reader.uint32());
                                    break;
                                }
                            case 8: {
                                    message.gift = $root.dwango.nicolive.chat.data.Gift.decode(reader, reader.uint32());
                                    break;
                                }
                            case 9: {
                                    message.nicoad = $root.dwango.nicolive.chat.data.Nicoad.decode(reader, reader.uint32());
                                    break;
                                }
                            case 13: {
                                    message.gameUpdate = $root.dwango.nicolive.chat.data.GameUpdate.decode(reader, reader.uint32());
                                    break;
                                }
                            case 17: {
                                    message.tagUpdated = $root.dwango.nicolive.chat.data.TagUpdated.decode(reader, reader.uint32());
                                    break;
                                }
                            case 18: {
                                    message.moderatorUpdated = $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated.decode(reader, reader.uint32());
                                    break;
                                }
                            case 19: {
                                    message.ssngUpdated = $root.dwango.nicolive.chat.data.atoms.SSNGUpdated.decode(reader, reader.uint32());
                                    break;
                                }
                            case 20: {
                                    message.overflowedChat = $root.dwango.nicolive.chat.data.Chat.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a NicoliveMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.NicoliveMessage} NicoliveMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NicoliveMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NicoliveMessage message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NicoliveMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.chat != null && message.hasOwnProperty("chat")) {
                            properties.data = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Chat.verify(message.chat);
                                if (error)
                                    return "chat." + error;
                            }
                        }
                        if (message.simpleNotification != null && message.hasOwnProperty("simpleNotification")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.SimpleNotification.verify(message.simpleNotification);
                                if (error)
                                    return "simpleNotification." + error;
                            }
                        }
                        if (message.gift != null && message.hasOwnProperty("gift")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Gift.verify(message.gift);
                                if (error)
                                    return "gift." + error;
                            }
                        }
                        if (message.nicoad != null && message.hasOwnProperty("nicoad")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Nicoad.verify(message.nicoad);
                                if (error)
                                    return "nicoad." + error;
                            }
                        }
                        if (message.gameUpdate != null && message.hasOwnProperty("gameUpdate")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.GameUpdate.verify(message.gameUpdate);
                                if (error)
                                    return "gameUpdate." + error;
                            }
                        }
                        if (message.tagUpdated != null && message.hasOwnProperty("tagUpdated")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.TagUpdated.verify(message.tagUpdated);
                                if (error)
                                    return "tagUpdated." + error;
                            }
                        }
                        if (message.moderatorUpdated != null && message.hasOwnProperty("moderatorUpdated")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated.verify(message.moderatorUpdated);
                                if (error)
                                    return "moderatorUpdated." + error;
                            }
                        }
                        if (message.ssngUpdated != null && message.hasOwnProperty("ssngUpdated")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.atoms.SSNGUpdated.verify(message.ssngUpdated);
                                if (error)
                                    return "ssngUpdated." + error;
                            }
                        }
                        if (message.overflowedChat != null && message.hasOwnProperty("overflowedChat")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Chat.verify(message.overflowedChat);
                                if (error)
                                    return "overflowedChat." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a NicoliveMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.NicoliveMessage} NicoliveMessage
                     */
                    NicoliveMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.NicoliveMessage)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.NicoliveMessage();
                        if (object.chat != null) {
                            if (typeof object.chat !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveMessage.chat: object expected");
                            message.chat = $root.dwango.nicolive.chat.data.Chat.fromObject(object.chat);
                        }
                        if (object.simpleNotification != null) {
                            if (typeof object.simpleNotification !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveMessage.simpleNotification: object expected");
                            message.simpleNotification = $root.dwango.nicolive.chat.data.SimpleNotification.fromObject(object.simpleNotification);
                        }
                        if (object.gift != null) {
                            if (typeof object.gift !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveMessage.gift: object expected");
                            message.gift = $root.dwango.nicolive.chat.data.Gift.fromObject(object.gift);
                        }
                        if (object.nicoad != null) {
                            if (typeof object.nicoad !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveMessage.nicoad: object expected");
                            message.nicoad = $root.dwango.nicolive.chat.data.Nicoad.fromObject(object.nicoad);
                        }
                        if (object.gameUpdate != null) {
                            if (typeof object.gameUpdate !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveMessage.gameUpdate: object expected");
                            message.gameUpdate = $root.dwango.nicolive.chat.data.GameUpdate.fromObject(object.gameUpdate);
                        }
                        if (object.tagUpdated != null) {
                            if (typeof object.tagUpdated !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveMessage.tagUpdated: object expected");
                            message.tagUpdated = $root.dwango.nicolive.chat.data.TagUpdated.fromObject(object.tagUpdated);
                        }
                        if (object.moderatorUpdated != null) {
                            if (typeof object.moderatorUpdated !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveMessage.moderatorUpdated: object expected");
                            message.moderatorUpdated = $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated.fromObject(object.moderatorUpdated);
                        }
                        if (object.ssngUpdated != null) {
                            if (typeof object.ssngUpdated !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveMessage.ssngUpdated: object expected");
                            message.ssngUpdated = $root.dwango.nicolive.chat.data.atoms.SSNGUpdated.fromObject(object.ssngUpdated);
                        }
                        if (object.overflowedChat != null) {
                            if (typeof object.overflowedChat !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveMessage.overflowedChat: object expected");
                            message.overflowedChat = $root.dwango.nicolive.chat.data.Chat.fromObject(object.overflowedChat);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a NicoliveMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @static
                     * @param {dwango.nicolive.chat.data.NicoliveMessage} message NicoliveMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NicoliveMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.chat != null && message.hasOwnProperty("chat")) {
                            object.chat = $root.dwango.nicolive.chat.data.Chat.toObject(message.chat, options);
                            if (options.oneofs)
                                object.data = "chat";
                        }
                        if (message.simpleNotification != null && message.hasOwnProperty("simpleNotification")) {
                            object.simpleNotification = $root.dwango.nicolive.chat.data.SimpleNotification.toObject(message.simpleNotification, options);
                            if (options.oneofs)
                                object.data = "simpleNotification";
                        }
                        if (message.gift != null && message.hasOwnProperty("gift")) {
                            object.gift = $root.dwango.nicolive.chat.data.Gift.toObject(message.gift, options);
                            if (options.oneofs)
                                object.data = "gift";
                        }
                        if (message.nicoad != null && message.hasOwnProperty("nicoad")) {
                            object.nicoad = $root.dwango.nicolive.chat.data.Nicoad.toObject(message.nicoad, options);
                            if (options.oneofs)
                                object.data = "nicoad";
                        }
                        if (message.gameUpdate != null && message.hasOwnProperty("gameUpdate")) {
                            object.gameUpdate = $root.dwango.nicolive.chat.data.GameUpdate.toObject(message.gameUpdate, options);
                            if (options.oneofs)
                                object.data = "gameUpdate";
                        }
                        if (message.tagUpdated != null && message.hasOwnProperty("tagUpdated")) {
                            object.tagUpdated = $root.dwango.nicolive.chat.data.TagUpdated.toObject(message.tagUpdated, options);
                            if (options.oneofs)
                                object.data = "tagUpdated";
                        }
                        if (message.moderatorUpdated != null && message.hasOwnProperty("moderatorUpdated")) {
                            object.moderatorUpdated = $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated.toObject(message.moderatorUpdated, options);
                            if (options.oneofs)
                                object.data = "moderatorUpdated";
                        }
                        if (message.ssngUpdated != null && message.hasOwnProperty("ssngUpdated")) {
                            object.ssngUpdated = $root.dwango.nicolive.chat.data.atoms.SSNGUpdated.toObject(message.ssngUpdated, options);
                            if (options.oneofs)
                                object.data = "ssngUpdated";
                        }
                        if (message.overflowedChat != null && message.hasOwnProperty("overflowedChat")) {
                            object.overflowedChat = $root.dwango.nicolive.chat.data.Chat.toObject(message.overflowedChat, options);
                            if (options.oneofs)
                                object.data = "overflowedChat";
                        }
                        return object;
                    };

                    /**
                     * Converts this NicoliveMessage to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NicoliveMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for NicoliveMessage
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.NicoliveMessage
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    NicoliveMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.NicoliveMessage";
                    };

                    return NicoliveMessage;
                })();

                data.Chat = (function() {

                    /**
                     * Properties of a Chat.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IChat
                     * @property {string|null} [content] Chat content
                     * @property {string|null} [name] Chat name
                     * @property {number|null} [vpos] Chat vpos
                     * @property {dwango.nicolive.chat.data.Chat.AccountStatus|null} [accountStatus] Chat accountStatus
                     * @property {number|Long|null} [rawUserId] Chat rawUserId
                     * @property {string|null} [hashedUserId] Chat hashedUserId
                     * @property {dwango.nicolive.chat.data.Chat.IModifier|null} [modifier] Chat modifier
                     * @property {number|null} [no] Chat no
                     */

                    /**
                     * Constructs a new Chat.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a Chat.
                     * @implements IChat
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IChat=} [properties] Properties to set
                     */
                    function Chat(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Chat content.
                     * @member {string} content
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     */
                    Chat.prototype.content = "";

                    /**
                     * Chat name.
                     * @member {string} name
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     */
                    Chat.prototype.name = "";

                    /**
                     * Chat vpos.
                     * @member {number} vpos
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     */
                    Chat.prototype.vpos = 0;

                    /**
                     * Chat accountStatus.
                     * @member {dwango.nicolive.chat.data.Chat.AccountStatus} accountStatus
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     */
                    Chat.prototype.accountStatus = 0;

                    /**
                     * Chat rawUserId.
                     * @member {number|Long|null|undefined} rawUserId
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     */
                    Chat.prototype.rawUserId = null;

                    /**
                     * Chat hashedUserId.
                     * @member {string|null|undefined} hashedUserId
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     */
                    Chat.prototype.hashedUserId = null;

                    /**
                     * Chat modifier.
                     * @member {dwango.nicolive.chat.data.Chat.IModifier|null|undefined} modifier
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     */
                    Chat.prototype.modifier = null;

                    /**
                     * Chat no.
                     * @member {number} no
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     */
                    Chat.prototype.no = 0;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Chat source.
                     * @member {"rawUserId"|"hashedUserId"|undefined} source
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     */
                    Object.defineProperty(Chat.prototype, "source", {
                        get: $util.oneOfGetter($oneOfFields = ["rawUserId", "hashedUserId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Chat instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @static
                     * @param {dwango.nicolive.chat.data.IChat=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.Chat} Chat instance
                     */
                    Chat.create = function create(properties) {
                        return new Chat(properties);
                    };

                    /**
                     * Encodes the specified Chat message. Does not implicitly {@link dwango.nicolive.chat.data.Chat.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @static
                     * @param {dwango.nicolive.chat.data.IChat} message Chat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Chat.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.vpos != null && Object.hasOwnProperty.call(message, "vpos"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vpos);
                        if (message.accountStatus != null && Object.hasOwnProperty.call(message, "accountStatus"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.accountStatus);
                        if (message.rawUserId != null && Object.hasOwnProperty.call(message, "rawUserId"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.rawUserId);
                        if (message.hashedUserId != null && Object.hasOwnProperty.call(message, "hashedUserId"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.hashedUserId);
                        if (message.modifier != null && Object.hasOwnProperty.call(message, "modifier"))
                            $root.dwango.nicolive.chat.data.Chat.Modifier.encode(message.modifier, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.no != null && Object.hasOwnProperty.call(message, "no"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.no);
                        return writer;
                    };

                    /**
                     * Encodes the specified Chat message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Chat.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @static
                     * @param {dwango.nicolive.chat.data.IChat} message Chat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Chat.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Chat message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.Chat} Chat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Chat.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Chat();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.content = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.name = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.vpos = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.accountStatus = reader.int32();
                                    break;
                                }
                            case 5: {
                                    message.rawUserId = reader.int64();
                                    break;
                                }
                            case 6: {
                                    message.hashedUserId = reader.string();
                                    break;
                                }
                            case 7: {
                                    message.modifier = $root.dwango.nicolive.chat.data.Chat.Modifier.decode(reader, reader.uint32());
                                    break;
                                }
                            case 8: {
                                    message.no = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Chat message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.Chat} Chat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Chat.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Chat message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Chat.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.content != null && message.hasOwnProperty("content"))
                            if (!$util.isString(message.content))
                                return "content: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.vpos != null && message.hasOwnProperty("vpos"))
                            if (!$util.isInteger(message.vpos))
                                return "vpos: integer expected";
                        if (message.accountStatus != null && message.hasOwnProperty("accountStatus"))
                            switch (message.accountStatus) {
                            default:
                                return "accountStatus: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.rawUserId != null && message.hasOwnProperty("rawUserId")) {
                            properties.source = 1;
                            if (!$util.isInteger(message.rawUserId) && !(message.rawUserId && $util.isInteger(message.rawUserId.low) && $util.isInteger(message.rawUserId.high)))
                                return "rawUserId: integer|Long expected";
                        }
                        if (message.hashedUserId != null && message.hasOwnProperty("hashedUserId")) {
                            if (properties.source === 1)
                                return "source: multiple values";
                            properties.source = 1;
                            if (!$util.isString(message.hashedUserId))
                                return "hashedUserId: string expected";
                        }
                        if (message.modifier != null && message.hasOwnProperty("modifier")) {
                            var error = $root.dwango.nicolive.chat.data.Chat.Modifier.verify(message.modifier);
                            if (error)
                                return "modifier." + error;
                        }
                        if (message.no != null && message.hasOwnProperty("no"))
                            if (!$util.isInteger(message.no))
                                return "no: integer expected";
                        return null;
                    };

                    /**
                     * Creates a Chat message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.Chat} Chat
                     */
                    Chat.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.Chat)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.Chat();
                        if (object.content != null)
                            message.content = String(object.content);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.vpos != null)
                            message.vpos = object.vpos | 0;
                        switch (object.accountStatus) {
                        default:
                            if (typeof object.accountStatus === "number") {
                                message.accountStatus = object.accountStatus;
                                break;
                            }
                            break;
                        case "Standard":
                        case 0:
                            message.accountStatus = 0;
                            break;
                        case "Premium":
                        case 1:
                            message.accountStatus = 1;
                            break;
                        }
                        if (object.rawUserId != null)
                            if ($util.Long)
                                (message.rawUserId = $util.Long.fromValue(object.rawUserId)).unsigned = false;
                            else if (typeof object.rawUserId === "string")
                                message.rawUserId = parseInt(object.rawUserId, 10);
                            else if (typeof object.rawUserId === "number")
                                message.rawUserId = object.rawUserId;
                            else if (typeof object.rawUserId === "object")
                                message.rawUserId = new $util.LongBits(object.rawUserId.low >>> 0, object.rawUserId.high >>> 0).toNumber();
                        if (object.hashedUserId != null)
                            message.hashedUserId = String(object.hashedUserId);
                        if (object.modifier != null) {
                            if (typeof object.modifier !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.Chat.modifier: object expected");
                            message.modifier = $root.dwango.nicolive.chat.data.Chat.Modifier.fromObject(object.modifier);
                        }
                        if (object.no != null)
                            message.no = object.no | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Chat message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @static
                     * @param {dwango.nicolive.chat.data.Chat} message Chat
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Chat.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.content = "";
                            object.name = "";
                            object.vpos = 0;
                            object.accountStatus = options.enums === String ? "Standard" : 0;
                            object.modifier = null;
                            object.no = 0;
                        }
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.vpos != null && message.hasOwnProperty("vpos"))
                            object.vpos = message.vpos;
                        if (message.accountStatus != null && message.hasOwnProperty("accountStatus"))
                            object.accountStatus = options.enums === String ? $root.dwango.nicolive.chat.data.Chat.AccountStatus[message.accountStatus] === undefined ? message.accountStatus : $root.dwango.nicolive.chat.data.Chat.AccountStatus[message.accountStatus] : message.accountStatus;
                        if (message.rawUserId != null && message.hasOwnProperty("rawUserId")) {
                            if (typeof message.rawUserId === "number")
                                object.rawUserId = options.longs === String ? String(message.rawUserId) : message.rawUserId;
                            else
                                object.rawUserId = options.longs === String ? $util.Long.prototype.toString.call(message.rawUserId) : options.longs === Number ? new $util.LongBits(message.rawUserId.low >>> 0, message.rawUserId.high >>> 0).toNumber() : message.rawUserId;
                            if (options.oneofs)
                                object.source = "rawUserId";
                        }
                        if (message.hashedUserId != null && message.hasOwnProperty("hashedUserId")) {
                            object.hashedUserId = message.hashedUserId;
                            if (options.oneofs)
                                object.source = "hashedUserId";
                        }
                        if (message.modifier != null && message.hasOwnProperty("modifier"))
                            object.modifier = $root.dwango.nicolive.chat.data.Chat.Modifier.toObject(message.modifier, options);
                        if (message.no != null && message.hasOwnProperty("no"))
                            object.no = message.no;
                        return object;
                    };

                    /**
                     * Converts this Chat to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Chat.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Chat
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.Chat
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Chat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.Chat";
                    };

                    /**
                     * AccountStatus enum.
                     * @name dwango.nicolive.chat.data.Chat.AccountStatus
                     * @enum {number}
                     * @property {number} Standard=0 Standard value
                     * @property {number} Premium=1 Premium value
                     */
                    Chat.AccountStatus = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Standard"] = 0;
                        values[valuesById[1] = "Premium"] = 1;
                        return values;
                    })();

                    Chat.Modifier = (function() {

                        /**
                         * Properties of a Modifier.
                         * @memberof dwango.nicolive.chat.data.Chat
                         * @interface IModifier
                         * @property {dwango.nicolive.chat.data.Chat.Modifier.Pos|null} [position] Modifier position
                         * @property {dwango.nicolive.chat.data.Chat.Modifier.Size|null} [size] Modifier size
                         * @property {dwango.nicolive.chat.data.Chat.Modifier.ColorName|null} [namedColor] Modifier namedColor
                         * @property {dwango.nicolive.chat.data.Chat.Modifier.IFullColor|null} [fullColor] Modifier fullColor
                         * @property {dwango.nicolive.chat.data.Chat.Modifier.Font|null} [font] Modifier font
                         * @property {dwango.nicolive.chat.data.Chat.Modifier.Opacity|null} [opacity] Modifier opacity
                         */

                        /**
                         * Constructs a new Modifier.
                         * @memberof dwango.nicolive.chat.data.Chat
                         * @classdesc Represents a Modifier.
                         * @implements IModifier
                         * @constructor
                         * @param {dwango.nicolive.chat.data.Chat.IModifier=} [properties] Properties to set
                         */
                        function Modifier(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Modifier position.
                         * @member {dwango.nicolive.chat.data.Chat.Modifier.Pos} position
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @instance
                         */
                        Modifier.prototype.position = 0;

                        /**
                         * Modifier size.
                         * @member {dwango.nicolive.chat.data.Chat.Modifier.Size} size
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @instance
                         */
                        Modifier.prototype.size = 0;

                        /**
                         * Modifier namedColor.
                         * @member {dwango.nicolive.chat.data.Chat.Modifier.ColorName|null|undefined} namedColor
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @instance
                         */
                        Modifier.prototype.namedColor = null;

                        /**
                         * Modifier fullColor.
                         * @member {dwango.nicolive.chat.data.Chat.Modifier.IFullColor|null|undefined} fullColor
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @instance
                         */
                        Modifier.prototype.fullColor = null;

                        /**
                         * Modifier font.
                         * @member {dwango.nicolive.chat.data.Chat.Modifier.Font} font
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @instance
                         */
                        Modifier.prototype.font = 0;

                        /**
                         * Modifier opacity.
                         * @member {dwango.nicolive.chat.data.Chat.Modifier.Opacity} opacity
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @instance
                         */
                        Modifier.prototype.opacity = 0;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * Modifier color.
                         * @member {"namedColor"|"fullColor"|undefined} color
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @instance
                         */
                        Object.defineProperty(Modifier.prototype, "color", {
                            get: $util.oneOfGetter($oneOfFields = ["namedColor", "fullColor"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Modifier instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @static
                         * @param {dwango.nicolive.chat.data.Chat.IModifier=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.Chat.Modifier} Modifier instance
                         */
                        Modifier.create = function create(properties) {
                            return new Modifier(properties);
                        };

                        /**
                         * Encodes the specified Modifier message. Does not implicitly {@link dwango.nicolive.chat.data.Chat.Modifier.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @static
                         * @param {dwango.nicolive.chat.data.Chat.IModifier} message Modifier message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Modifier.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.position);
                            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.size);
                            if (message.namedColor != null && Object.hasOwnProperty.call(message, "namedColor"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.namedColor);
                            if (message.fullColor != null && Object.hasOwnProperty.call(message, "fullColor"))
                                $root.dwango.nicolive.chat.data.Chat.Modifier.FullColor.encode(message.fullColor, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.font != null && Object.hasOwnProperty.call(message, "font"))
                                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.font);
                            if (message.opacity != null && Object.hasOwnProperty.call(message, "opacity"))
                                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.opacity);
                            return writer;
                        };

                        /**
                         * Encodes the specified Modifier message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Chat.Modifier.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @static
                         * @param {dwango.nicolive.chat.data.Chat.IModifier} message Modifier message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Modifier.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Modifier message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.Chat.Modifier} Modifier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Modifier.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Chat.Modifier();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.position = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.size = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.namedColor = reader.int32();
                                        break;
                                    }
                                case 4: {
                                        message.fullColor = $root.dwango.nicolive.chat.data.Chat.Modifier.FullColor.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 5: {
                                        message.font = reader.int32();
                                        break;
                                    }
                                case 6: {
                                        message.opacity = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Modifier message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.Chat.Modifier} Modifier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Modifier.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Modifier message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Modifier.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.position != null && message.hasOwnProperty("position"))
                                switch (message.position) {
                                default:
                                    return "position: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            if (message.size != null && message.hasOwnProperty("size"))
                                switch (message.size) {
                                default:
                                    return "size: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            if (message.namedColor != null && message.hasOwnProperty("namedColor")) {
                                properties.color = 1;
                                switch (message.namedColor) {
                                default:
                                    return "namedColor: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                case 13:
                                case 14:
                                case 15:
                                case 16:
                                case 17:
                                case 18:
                                case 19:
                                    break;
                                }
                            }
                            if (message.fullColor != null && message.hasOwnProperty("fullColor")) {
                                if (properties.color === 1)
                                    return "color: multiple values";
                                properties.color = 1;
                                {
                                    var error = $root.dwango.nicolive.chat.data.Chat.Modifier.FullColor.verify(message.fullColor);
                                    if (error)
                                        return "fullColor." + error;
                                }
                            }
                            if (message.font != null && message.hasOwnProperty("font"))
                                switch (message.font) {
                                default:
                                    return "font: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            if (message.opacity != null && message.hasOwnProperty("opacity"))
                                switch (message.opacity) {
                                default:
                                    return "opacity: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            return null;
                        };

                        /**
                         * Creates a Modifier message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.Chat.Modifier} Modifier
                         */
                        Modifier.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.Chat.Modifier)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.Chat.Modifier();
                            switch (object.position) {
                            default:
                                if (typeof object.position === "number") {
                                    message.position = object.position;
                                    break;
                                }
                                break;
                            case "naka":
                            case 0:
                                message.position = 0;
                                break;
                            case "shita":
                            case 1:
                                message.position = 1;
                                break;
                            case "ue":
                            case 2:
                                message.position = 2;
                                break;
                            }
                            switch (object.size) {
                            default:
                                if (typeof object.size === "number") {
                                    message.size = object.size;
                                    break;
                                }
                                break;
                            case "medium":
                            case 0:
                                message.size = 0;
                                break;
                            case "small":
                            case 1:
                                message.size = 1;
                                break;
                            case "big":
                            case 2:
                                message.size = 2;
                                break;
                            }
                            switch (object.namedColor) {
                            default:
                                if (typeof object.namedColor === "number") {
                                    message.namedColor = object.namedColor;
                                    break;
                                }
                                break;
                            case "white":
                            case 0:
                                message.namedColor = 0;
                                break;
                            case "red":
                            case 1:
                                message.namedColor = 1;
                                break;
                            case "pink":
                            case 2:
                                message.namedColor = 2;
                                break;
                            case "orange":
                            case 3:
                                message.namedColor = 3;
                                break;
                            case "yellow":
                            case 4:
                                message.namedColor = 4;
                                break;
                            case "green":
                            case 5:
                                message.namedColor = 5;
                                break;
                            case "cyan":
                            case 6:
                                message.namedColor = 6;
                                break;
                            case "blue":
                            case 7:
                                message.namedColor = 7;
                                break;
                            case "purple":
                            case 8:
                                message.namedColor = 8;
                                break;
                            case "black":
                            case 9:
                                message.namedColor = 9;
                                break;
                            case "white2":
                            case 10:
                                message.namedColor = 10;
                                break;
                            case "red2":
                            case 11:
                                message.namedColor = 11;
                                break;
                            case "pink2":
                            case 12:
                                message.namedColor = 12;
                                break;
                            case "orange2":
                            case 13:
                                message.namedColor = 13;
                                break;
                            case "yellow2":
                            case 14:
                                message.namedColor = 14;
                                break;
                            case "green2":
                            case 15:
                                message.namedColor = 15;
                                break;
                            case "cyan2":
                            case 16:
                                message.namedColor = 16;
                                break;
                            case "blue2":
                            case 17:
                                message.namedColor = 17;
                                break;
                            case "purple2":
                            case 18:
                                message.namedColor = 18;
                                break;
                            case "black2":
                            case 19:
                                message.namedColor = 19;
                                break;
                            }
                            if (object.fullColor != null) {
                                if (typeof object.fullColor !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.Chat.Modifier.fullColor: object expected");
                                message.fullColor = $root.dwango.nicolive.chat.data.Chat.Modifier.FullColor.fromObject(object.fullColor);
                            }
                            switch (object.font) {
                            default:
                                if (typeof object.font === "number") {
                                    message.font = object.font;
                                    break;
                                }
                                break;
                            case "defont":
                            case 0:
                                message.font = 0;
                                break;
                            case "mincho":
                            case 1:
                                message.font = 1;
                                break;
                            case "gothic":
                            case 2:
                                message.font = 2;
                                break;
                            }
                            switch (object.opacity) {
                            default:
                                if (typeof object.opacity === "number") {
                                    message.opacity = object.opacity;
                                    break;
                                }
                                break;
                            case "Normal":
                            case 0:
                                message.opacity = 0;
                                break;
                            case "Translucent":
                            case 1:
                                message.opacity = 1;
                                break;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Modifier message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @static
                         * @param {dwango.nicolive.chat.data.Chat.Modifier} message Modifier
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Modifier.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.position = options.enums === String ? "naka" : 0;
                                object.size = options.enums === String ? "medium" : 0;
                                object.font = options.enums === String ? "defont" : 0;
                                object.opacity = options.enums === String ? "Normal" : 0;
                            }
                            if (message.position != null && message.hasOwnProperty("position"))
                                object.position = options.enums === String ? $root.dwango.nicolive.chat.data.Chat.Modifier.Pos[message.position] === undefined ? message.position : $root.dwango.nicolive.chat.data.Chat.Modifier.Pos[message.position] : message.position;
                            if (message.size != null && message.hasOwnProperty("size"))
                                object.size = options.enums === String ? $root.dwango.nicolive.chat.data.Chat.Modifier.Size[message.size] === undefined ? message.size : $root.dwango.nicolive.chat.data.Chat.Modifier.Size[message.size] : message.size;
                            if (message.namedColor != null && message.hasOwnProperty("namedColor")) {
                                object.namedColor = options.enums === String ? $root.dwango.nicolive.chat.data.Chat.Modifier.ColorName[message.namedColor] === undefined ? message.namedColor : $root.dwango.nicolive.chat.data.Chat.Modifier.ColorName[message.namedColor] : message.namedColor;
                                if (options.oneofs)
                                    object.color = "namedColor";
                            }
                            if (message.fullColor != null && message.hasOwnProperty("fullColor")) {
                                object.fullColor = $root.dwango.nicolive.chat.data.Chat.Modifier.FullColor.toObject(message.fullColor, options);
                                if (options.oneofs)
                                    object.color = "fullColor";
                            }
                            if (message.font != null && message.hasOwnProperty("font"))
                                object.font = options.enums === String ? $root.dwango.nicolive.chat.data.Chat.Modifier.Font[message.font] === undefined ? message.font : $root.dwango.nicolive.chat.data.Chat.Modifier.Font[message.font] : message.font;
                            if (message.opacity != null && message.hasOwnProperty("opacity"))
                                object.opacity = options.enums === String ? $root.dwango.nicolive.chat.data.Chat.Modifier.Opacity[message.opacity] === undefined ? message.opacity : $root.dwango.nicolive.chat.data.Chat.Modifier.Opacity[message.opacity] : message.opacity;
                            return object;
                        };

                        /**
                         * Converts this Modifier to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Modifier.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Modifier
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.Chat.Modifier
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Modifier.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.Chat.Modifier";
                        };

                        /**
                         * Pos enum.
                         * @name dwango.nicolive.chat.data.Chat.Modifier.Pos
                         * @enum {number}
                         * @property {number} naka=0 naka value
                         * @property {number} shita=1 shita value
                         * @property {number} ue=2 ue value
                         */
                        Modifier.Pos = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "naka"] = 0;
                            values[valuesById[1] = "shita"] = 1;
                            values[valuesById[2] = "ue"] = 2;
                            return values;
                        })();

                        /**
                         * Size enum.
                         * @name dwango.nicolive.chat.data.Chat.Modifier.Size
                         * @enum {number}
                         * @property {number} medium=0 medium value
                         * @property {number} small=1 small value
                         * @property {number} big=2 big value
                         */
                        Modifier.Size = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "medium"] = 0;
                            values[valuesById[1] = "small"] = 1;
                            values[valuesById[2] = "big"] = 2;
                            return values;
                        })();

                        /**
                         * ColorName enum.
                         * @name dwango.nicolive.chat.data.Chat.Modifier.ColorName
                         * @enum {number}
                         * @property {number} white=0 white value
                         * @property {number} red=1 red value
                         * @property {number} pink=2 pink value
                         * @property {number} orange=3 orange value
                         * @property {number} yellow=4 yellow value
                         * @property {number} green=5 green value
                         * @property {number} cyan=6 cyan value
                         * @property {number} blue=7 blue value
                         * @property {number} purple=8 purple value
                         * @property {number} black=9 black value
                         * @property {number} white2=10 white2 value
                         * @property {number} red2=11 red2 value
                         * @property {number} pink2=12 pink2 value
                         * @property {number} orange2=13 orange2 value
                         * @property {number} yellow2=14 yellow2 value
                         * @property {number} green2=15 green2 value
                         * @property {number} cyan2=16 cyan2 value
                         * @property {number} blue2=17 blue2 value
                         * @property {number} purple2=18 purple2 value
                         * @property {number} black2=19 black2 value
                         */
                        Modifier.ColorName = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "white"] = 0;
                            values[valuesById[1] = "red"] = 1;
                            values[valuesById[2] = "pink"] = 2;
                            values[valuesById[3] = "orange"] = 3;
                            values[valuesById[4] = "yellow"] = 4;
                            values[valuesById[5] = "green"] = 5;
                            values[valuesById[6] = "cyan"] = 6;
                            values[valuesById[7] = "blue"] = 7;
                            values[valuesById[8] = "purple"] = 8;
                            values[valuesById[9] = "black"] = 9;
                            values[valuesById[10] = "white2"] = 10;
                            values[valuesById[11] = "red2"] = 11;
                            values[valuesById[12] = "pink2"] = 12;
                            values[valuesById[13] = "orange2"] = 13;
                            values[valuesById[14] = "yellow2"] = 14;
                            values[valuesById[15] = "green2"] = 15;
                            values[valuesById[16] = "cyan2"] = 16;
                            values[valuesById[17] = "blue2"] = 17;
                            values[valuesById[18] = "purple2"] = 18;
                            values[valuesById[19] = "black2"] = 19;
                            return values;
                        })();

                        /**
                         * Font enum.
                         * @name dwango.nicolive.chat.data.Chat.Modifier.Font
                         * @enum {number}
                         * @property {number} defont=0 defont value
                         * @property {number} mincho=1 mincho value
                         * @property {number} gothic=2 gothic value
                         */
                        Modifier.Font = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "defont"] = 0;
                            values[valuesById[1] = "mincho"] = 1;
                            values[valuesById[2] = "gothic"] = 2;
                            return values;
                        })();

                        /**
                         * Opacity enum.
                         * @name dwango.nicolive.chat.data.Chat.Modifier.Opacity
                         * @enum {number}
                         * @property {number} Normal=0 Normal value
                         * @property {number} Translucent=1 Translucent value
                         */
                        Modifier.Opacity = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "Normal"] = 0;
                            values[valuesById[1] = "Translucent"] = 1;
                            return values;
                        })();

                        Modifier.FullColor = (function() {

                            /**
                             * Properties of a FullColor.
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier
                             * @interface IFullColor
                             * @property {number|null} [r] FullColor r
                             * @property {number|null} [g] FullColor g
                             * @property {number|null} [b] FullColor b
                             */

                            /**
                             * Constructs a new FullColor.
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier
                             * @classdesc Represents a FullColor.
                             * @implements IFullColor
                             * @constructor
                             * @param {dwango.nicolive.chat.data.Chat.Modifier.IFullColor=} [properties] Properties to set
                             */
                            function FullColor(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * FullColor r.
                             * @member {number} r
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @instance
                             */
                            FullColor.prototype.r = 0;

                            /**
                             * FullColor g.
                             * @member {number} g
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @instance
                             */
                            FullColor.prototype.g = 0;

                            /**
                             * FullColor b.
                             * @member {number} b
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @instance
                             */
                            FullColor.prototype.b = 0;

                            /**
                             * Creates a new FullColor instance using the specified properties.
                             * @function create
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @static
                             * @param {dwango.nicolive.chat.data.Chat.Modifier.IFullColor=} [properties] Properties to set
                             * @returns {dwango.nicolive.chat.data.Chat.Modifier.FullColor} FullColor instance
                             */
                            FullColor.create = function create(properties) {
                                return new FullColor(properties);
                            };

                            /**
                             * Encodes the specified FullColor message. Does not implicitly {@link dwango.nicolive.chat.data.Chat.Modifier.FullColor.verify|verify} messages.
                             * @function encode
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @static
                             * @param {dwango.nicolive.chat.data.Chat.Modifier.IFullColor} message FullColor message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            FullColor.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.r != null && Object.hasOwnProperty.call(message, "r"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.r);
                                if (message.g != null && Object.hasOwnProperty.call(message, "g"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.g);
                                if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.b);
                                return writer;
                            };

                            /**
                             * Encodes the specified FullColor message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Chat.Modifier.FullColor.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @static
                             * @param {dwango.nicolive.chat.data.Chat.Modifier.IFullColor} message FullColor message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            FullColor.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a FullColor message from the specified reader or buffer.
                             * @function decode
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {dwango.nicolive.chat.data.Chat.Modifier.FullColor} FullColor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            FullColor.decode = function decode(reader, length, error) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Chat.Modifier.FullColor();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    if (tag === error)
                                        break;
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.r = reader.int32();
                                            break;
                                        }
                                    case 2: {
                                            message.g = reader.int32();
                                            break;
                                        }
                                    case 3: {
                                            message.b = reader.int32();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a FullColor message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {dwango.nicolive.chat.data.Chat.Modifier.FullColor} FullColor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            FullColor.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a FullColor message.
                             * @function verify
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            FullColor.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.r != null && message.hasOwnProperty("r"))
                                    if (!$util.isInteger(message.r))
                                        return "r: integer expected";
                                if (message.g != null && message.hasOwnProperty("g"))
                                    if (!$util.isInteger(message.g))
                                        return "g: integer expected";
                                if (message.b != null && message.hasOwnProperty("b"))
                                    if (!$util.isInteger(message.b))
                                        return "b: integer expected";
                                return null;
                            };

                            /**
                             * Creates a FullColor message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {dwango.nicolive.chat.data.Chat.Modifier.FullColor} FullColor
                             */
                            FullColor.fromObject = function fromObject(object) {
                                if (object instanceof $root.dwango.nicolive.chat.data.Chat.Modifier.FullColor)
                                    return object;
                                var message = new $root.dwango.nicolive.chat.data.Chat.Modifier.FullColor();
                                if (object.r != null)
                                    message.r = object.r | 0;
                                if (object.g != null)
                                    message.g = object.g | 0;
                                if (object.b != null)
                                    message.b = object.b | 0;
                                return message;
                            };

                            /**
                             * Creates a plain object from a FullColor message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @static
                             * @param {dwango.nicolive.chat.data.Chat.Modifier.FullColor} message FullColor
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            FullColor.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.r = 0;
                                    object.g = 0;
                                    object.b = 0;
                                }
                                if (message.r != null && message.hasOwnProperty("r"))
                                    object.r = message.r;
                                if (message.g != null && message.hasOwnProperty("g"))
                                    object.g = message.g;
                                if (message.b != null && message.hasOwnProperty("b"))
                                    object.b = message.b;
                                return object;
                            };

                            /**
                             * Converts this FullColor to JSON.
                             * @function toJSON
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            FullColor.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for FullColor
                             * @function getTypeUrl
                             * @memberof dwango.nicolive.chat.data.Chat.Modifier.FullColor
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            FullColor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/dwango.nicolive.chat.data.Chat.Modifier.FullColor";
                            };

                            return FullColor;
                        })();

                        return Modifier;
                    })();

                    return Chat;
                })();

                data.SimpleNotification = (function() {

                    /**
                     * Properties of a SimpleNotification.
                     * @memberof dwango.nicolive.chat.data
                     * @interface ISimpleNotification
                     * @property {string|null} [ichiba] SimpleNotification ichiba
                     * @property {string|null} [quote] SimpleNotification quote
                     * @property {string|null} [emotion] SimpleNotification emotion
                     * @property {string|null} [cruise] SimpleNotification cruise
                     * @property {string|null} [programExtended] SimpleNotification programExtended
                     * @property {string|null} [rankingIn] SimpleNotification rankingIn
                     * @property {string|null} [rankingUpdated] SimpleNotification rankingUpdated
                     * @property {string|null} [visited] SimpleNotification visited
                     */

                    /**
                     * Constructs a new SimpleNotification.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a SimpleNotification.
                     * @implements ISimpleNotification
                     * @constructor
                     * @param {dwango.nicolive.chat.data.ISimpleNotification=} [properties] Properties to set
                     */
                    function SimpleNotification(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SimpleNotification ichiba.
                     * @member {string|null|undefined} ichiba
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     */
                    SimpleNotification.prototype.ichiba = null;

                    /**
                     * SimpleNotification quote.
                     * @member {string|null|undefined} quote
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     */
                    SimpleNotification.prototype.quote = null;

                    /**
                     * SimpleNotification emotion.
                     * @member {string|null|undefined} emotion
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     */
                    SimpleNotification.prototype.emotion = null;

                    /**
                     * SimpleNotification cruise.
                     * @member {string|null|undefined} cruise
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     */
                    SimpleNotification.prototype.cruise = null;

                    /**
                     * SimpleNotification programExtended.
                     * @member {string|null|undefined} programExtended
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     */
                    SimpleNotification.prototype.programExtended = null;

                    /**
                     * SimpleNotification rankingIn.
                     * @member {string|null|undefined} rankingIn
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     */
                    SimpleNotification.prototype.rankingIn = null;

                    /**
                     * SimpleNotification rankingUpdated.
                     * @member {string|null|undefined} rankingUpdated
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     */
                    SimpleNotification.prototype.rankingUpdated = null;

                    /**
                     * SimpleNotification visited.
                     * @member {string|null|undefined} visited
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     */
                    SimpleNotification.prototype.visited = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * SimpleNotification message.
                     * @member {"ichiba"|"quote"|"emotion"|"cruise"|"programExtended"|"rankingIn"|"rankingUpdated"|"visited"|undefined} message
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     */
                    Object.defineProperty(SimpleNotification.prototype, "message", {
                        get: $util.oneOfGetter($oneOfFields = ["ichiba", "quote", "emotion", "cruise", "programExtended", "rankingIn", "rankingUpdated", "visited"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new SimpleNotification instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @static
                     * @param {dwango.nicolive.chat.data.ISimpleNotification=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.SimpleNotification} SimpleNotification instance
                     */
                    SimpleNotification.create = function create(properties) {
                        return new SimpleNotification(properties);
                    };

                    /**
                     * Encodes the specified SimpleNotification message. Does not implicitly {@link dwango.nicolive.chat.data.SimpleNotification.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @static
                     * @param {dwango.nicolive.chat.data.ISimpleNotification} message SimpleNotification message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SimpleNotification.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ichiba != null && Object.hasOwnProperty.call(message, "ichiba"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ichiba);
                        if (message.quote != null && Object.hasOwnProperty.call(message, "quote"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.quote);
                        if (message.emotion != null && Object.hasOwnProperty.call(message, "emotion"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.emotion);
                        if (message.cruise != null && Object.hasOwnProperty.call(message, "cruise"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.cruise);
                        if (message.programExtended != null && Object.hasOwnProperty.call(message, "programExtended"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.programExtended);
                        if (message.rankingIn != null && Object.hasOwnProperty.call(message, "rankingIn"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.rankingIn);
                        if (message.visited != null && Object.hasOwnProperty.call(message, "visited"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.visited);
                        if (message.rankingUpdated != null && Object.hasOwnProperty.call(message, "rankingUpdated"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.rankingUpdated);
                        return writer;
                    };

                    /**
                     * Encodes the specified SimpleNotification message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.SimpleNotification.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @static
                     * @param {dwango.nicolive.chat.data.ISimpleNotification} message SimpleNotification message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SimpleNotification.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SimpleNotification message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.SimpleNotification} SimpleNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SimpleNotification.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.SimpleNotification();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.ichiba = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.quote = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.emotion = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.cruise = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.programExtended = reader.string();
                                    break;
                                }
                            case 6: {
                                    message.rankingIn = reader.string();
                                    break;
                                }
                            case 8: {
                                    message.rankingUpdated = reader.string();
                                    break;
                                }
                            case 7: {
                                    message.visited = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SimpleNotification message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.SimpleNotification} SimpleNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SimpleNotification.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SimpleNotification message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SimpleNotification.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.ichiba != null && message.hasOwnProperty("ichiba")) {
                            properties.message = 1;
                            if (!$util.isString(message.ichiba))
                                return "ichiba: string expected";
                        }
                        if (message.quote != null && message.hasOwnProperty("quote")) {
                            if (properties.message === 1)
                                return "message: multiple values";
                            properties.message = 1;
                            if (!$util.isString(message.quote))
                                return "quote: string expected";
                        }
                        if (message.emotion != null && message.hasOwnProperty("emotion")) {
                            if (properties.message === 1)
                                return "message: multiple values";
                            properties.message = 1;
                            if (!$util.isString(message.emotion))
                                return "emotion: string expected";
                        }
                        if (message.cruise != null && message.hasOwnProperty("cruise")) {
                            if (properties.message === 1)
                                return "message: multiple values";
                            properties.message = 1;
                            if (!$util.isString(message.cruise))
                                return "cruise: string expected";
                        }
                        if (message.programExtended != null && message.hasOwnProperty("programExtended")) {
                            if (properties.message === 1)
                                return "message: multiple values";
                            properties.message = 1;
                            if (!$util.isString(message.programExtended))
                                return "programExtended: string expected";
                        }
                        if (message.rankingIn != null && message.hasOwnProperty("rankingIn")) {
                            if (properties.message === 1)
                                return "message: multiple values";
                            properties.message = 1;
                            if (!$util.isString(message.rankingIn))
                                return "rankingIn: string expected";
                        }
                        if (message.rankingUpdated != null && message.hasOwnProperty("rankingUpdated")) {
                            if (properties.message === 1)
                                return "message: multiple values";
                            properties.message = 1;
                            if (!$util.isString(message.rankingUpdated))
                                return "rankingUpdated: string expected";
                        }
                        if (message.visited != null && message.hasOwnProperty("visited")) {
                            if (properties.message === 1)
                                return "message: multiple values";
                            properties.message = 1;
                            if (!$util.isString(message.visited))
                                return "visited: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a SimpleNotification message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.SimpleNotification} SimpleNotification
                     */
                    SimpleNotification.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.SimpleNotification)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.SimpleNotification();
                        if (object.ichiba != null)
                            message.ichiba = String(object.ichiba);
                        if (object.quote != null)
                            message.quote = String(object.quote);
                        if (object.emotion != null)
                            message.emotion = String(object.emotion);
                        if (object.cruise != null)
                            message.cruise = String(object.cruise);
                        if (object.programExtended != null)
                            message.programExtended = String(object.programExtended);
                        if (object.rankingIn != null)
                            message.rankingIn = String(object.rankingIn);
                        if (object.rankingUpdated != null)
                            message.rankingUpdated = String(object.rankingUpdated);
                        if (object.visited != null)
                            message.visited = String(object.visited);
                        return message;
                    };

                    /**
                     * Creates a plain object from a SimpleNotification message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @static
                     * @param {dwango.nicolive.chat.data.SimpleNotification} message SimpleNotification
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SimpleNotification.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.ichiba != null && message.hasOwnProperty("ichiba")) {
                            object.ichiba = message.ichiba;
                            if (options.oneofs)
                                object.message = "ichiba";
                        }
                        if (message.quote != null && message.hasOwnProperty("quote")) {
                            object.quote = message.quote;
                            if (options.oneofs)
                                object.message = "quote";
                        }
                        if (message.emotion != null && message.hasOwnProperty("emotion")) {
                            object.emotion = message.emotion;
                            if (options.oneofs)
                                object.message = "emotion";
                        }
                        if (message.cruise != null && message.hasOwnProperty("cruise")) {
                            object.cruise = message.cruise;
                            if (options.oneofs)
                                object.message = "cruise";
                        }
                        if (message.programExtended != null && message.hasOwnProperty("programExtended")) {
                            object.programExtended = message.programExtended;
                            if (options.oneofs)
                                object.message = "programExtended";
                        }
                        if (message.rankingIn != null && message.hasOwnProperty("rankingIn")) {
                            object.rankingIn = message.rankingIn;
                            if (options.oneofs)
                                object.message = "rankingIn";
                        }
                        if (message.visited != null && message.hasOwnProperty("visited")) {
                            object.visited = message.visited;
                            if (options.oneofs)
                                object.message = "visited";
                        }
                        if (message.rankingUpdated != null && message.hasOwnProperty("rankingUpdated")) {
                            object.rankingUpdated = message.rankingUpdated;
                            if (options.oneofs)
                                object.message = "rankingUpdated";
                        }
                        return object;
                    };

                    /**
                     * Converts this SimpleNotification to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SimpleNotification.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for SimpleNotification
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.SimpleNotification
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    SimpleNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.SimpleNotification";
                    };

                    return SimpleNotification;
                })();

                data.Gift = (function() {

                    /**
                     * Properties of a Gift.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IGift
                     * @property {string|null} [itemId] Gift itemId
                     * @property {number|Long|null} [advertiserUserId] Gift advertiserUserId
                     * @property {string|null} [advertiserName] Gift advertiserName
                     * @property {number|Long|null} [point] Gift point
                     * @property {string|null} [message] Gift message
                     * @property {string|null} [itemName] Gift itemName
                     * @property {number|null} [contributionRank] Gift contributionRank
                     */

                    /**
                     * Constructs a new Gift.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a Gift.
                     * @implements IGift
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IGift=} [properties] Properties to set
                     */
                    function Gift(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Gift itemId.
                     * @member {string} itemId
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     */
                    Gift.prototype.itemId = "";

                    /**
                     * Gift advertiserUserId.
                     * @member {number|Long|null|undefined} advertiserUserId
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     */
                    Gift.prototype.advertiserUserId = null;

                    /**
                     * Gift advertiserName.
                     * @member {string} advertiserName
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     */
                    Gift.prototype.advertiserName = "";

                    /**
                     * Gift point.
                     * @member {number|Long} point
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     */
                    Gift.prototype.point = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Gift message.
                     * @member {string} message
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     */
                    Gift.prototype.message = "";

                    /**
                     * Gift itemName.
                     * @member {string} itemName
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     */
                    Gift.prototype.itemName = "";

                    /**
                     * Gift contributionRank.
                     * @member {number|null|undefined} contributionRank
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     */
                    Gift.prototype.contributionRank = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Gift _advertiserUserId.
                     * @member {"advertiserUserId"|undefined} _advertiserUserId
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     */
                    Object.defineProperty(Gift.prototype, "_advertiserUserId", {
                        get: $util.oneOfGetter($oneOfFields = ["advertiserUserId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Gift _contributionRank.
                     * @member {"contributionRank"|undefined} _contributionRank
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     */
                    Object.defineProperty(Gift.prototype, "_contributionRank", {
                        get: $util.oneOfGetter($oneOfFields = ["contributionRank"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Gift instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @static
                     * @param {dwango.nicolive.chat.data.IGift=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.Gift} Gift instance
                     */
                    Gift.create = function create(properties) {
                        return new Gift(properties);
                    };

                    /**
                     * Encodes the specified Gift message. Does not implicitly {@link dwango.nicolive.chat.data.Gift.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @static
                     * @param {dwango.nicolive.chat.data.IGift} message Gift message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Gift.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
                        if (message.advertiserUserId != null && Object.hasOwnProperty.call(message, "advertiserUserId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.advertiserUserId);
                        if (message.advertiserName != null && Object.hasOwnProperty.call(message, "advertiserName"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.advertiserName);
                        if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.point);
                        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.message);
                        if (message.itemName != null && Object.hasOwnProperty.call(message, "itemName"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.itemName);
                        if (message.contributionRank != null && Object.hasOwnProperty.call(message, "contributionRank"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.contributionRank);
                        return writer;
                    };

                    /**
                     * Encodes the specified Gift message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Gift.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @static
                     * @param {dwango.nicolive.chat.data.IGift} message Gift message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Gift.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Gift message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.Gift} Gift
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Gift.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Gift();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.itemId = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.advertiserUserId = reader.int64();
                                    break;
                                }
                            case 3: {
                                    message.advertiserName = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.point = reader.int64();
                                    break;
                                }
                            case 5: {
                                    message.message = reader.string();
                                    break;
                                }
                            case 6: {
                                    message.itemName = reader.string();
                                    break;
                                }
                            case 7: {
                                    message.contributionRank = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Gift message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.Gift} Gift
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Gift.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Gift message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Gift.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.itemId != null && message.hasOwnProperty("itemId"))
                            if (!$util.isString(message.itemId))
                                return "itemId: string expected";
                        if (message.advertiserUserId != null && message.hasOwnProperty("advertiserUserId")) {
                            properties._advertiserUserId = 1;
                            if (!$util.isInteger(message.advertiserUserId) && !(message.advertiserUserId && $util.isInteger(message.advertiserUserId.low) && $util.isInteger(message.advertiserUserId.high)))
                                return "advertiserUserId: integer|Long expected";
                        }
                        if (message.advertiserName != null && message.hasOwnProperty("advertiserName"))
                            if (!$util.isString(message.advertiserName))
                                return "advertiserName: string expected";
                        if (message.point != null && message.hasOwnProperty("point"))
                            if (!$util.isInteger(message.point) && !(message.point && $util.isInteger(message.point.low) && $util.isInteger(message.point.high)))
                                return "point: integer|Long expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (message.itemName != null && message.hasOwnProperty("itemName"))
                            if (!$util.isString(message.itemName))
                                return "itemName: string expected";
                        if (message.contributionRank != null && message.hasOwnProperty("contributionRank")) {
                            properties._contributionRank = 1;
                            if (!$util.isInteger(message.contributionRank))
                                return "contributionRank: integer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Gift message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.Gift} Gift
                     */
                    Gift.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.Gift)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.Gift();
                        if (object.itemId != null)
                            message.itemId = String(object.itemId);
                        if (object.advertiserUserId != null)
                            if ($util.Long)
                                (message.advertiserUserId = $util.Long.fromValue(object.advertiserUserId)).unsigned = false;
                            else if (typeof object.advertiserUserId === "string")
                                message.advertiserUserId = parseInt(object.advertiserUserId, 10);
                            else if (typeof object.advertiserUserId === "number")
                                message.advertiserUserId = object.advertiserUserId;
                            else if (typeof object.advertiserUserId === "object")
                                message.advertiserUserId = new $util.LongBits(object.advertiserUserId.low >>> 0, object.advertiserUserId.high >>> 0).toNumber();
                        if (object.advertiserName != null)
                            message.advertiserName = String(object.advertiserName);
                        if (object.point != null)
                            if ($util.Long)
                                (message.point = $util.Long.fromValue(object.point)).unsigned = false;
                            else if (typeof object.point === "string")
                                message.point = parseInt(object.point, 10);
                            else if (typeof object.point === "number")
                                message.point = object.point;
                            else if (typeof object.point === "object")
                                message.point = new $util.LongBits(object.point.low >>> 0, object.point.high >>> 0).toNumber();
                        if (object.message != null)
                            message.message = String(object.message);
                        if (object.itemName != null)
                            message.itemName = String(object.itemName);
                        if (object.contributionRank != null)
                            message.contributionRank = object.contributionRank | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Gift message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @static
                     * @param {dwango.nicolive.chat.data.Gift} message Gift
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Gift.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.itemId = "";
                            object.advertiserName = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.point = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.point = options.longs === String ? "0" : 0;
                            object.message = "";
                            object.itemName = "";
                        }
                        if (message.itemId != null && message.hasOwnProperty("itemId"))
                            object.itemId = message.itemId;
                        if (message.advertiserUserId != null && message.hasOwnProperty("advertiserUserId")) {
                            if (typeof message.advertiserUserId === "number")
                                object.advertiserUserId = options.longs === String ? String(message.advertiserUserId) : message.advertiserUserId;
                            else
                                object.advertiserUserId = options.longs === String ? $util.Long.prototype.toString.call(message.advertiserUserId) : options.longs === Number ? new $util.LongBits(message.advertiserUserId.low >>> 0, message.advertiserUserId.high >>> 0).toNumber() : message.advertiserUserId;
                            if (options.oneofs)
                                object._advertiserUserId = "advertiserUserId";
                        }
                        if (message.advertiserName != null && message.hasOwnProperty("advertiserName"))
                            object.advertiserName = message.advertiserName;
                        if (message.point != null && message.hasOwnProperty("point"))
                            if (typeof message.point === "number")
                                object.point = options.longs === String ? String(message.point) : message.point;
                            else
                                object.point = options.longs === String ? $util.Long.prototype.toString.call(message.point) : options.longs === Number ? new $util.LongBits(message.point.low >>> 0, message.point.high >>> 0).toNumber() : message.point;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.itemName != null && message.hasOwnProperty("itemName"))
                            object.itemName = message.itemName;
                        if (message.contributionRank != null && message.hasOwnProperty("contributionRank")) {
                            object.contributionRank = message.contributionRank;
                            if (options.oneofs)
                                object._contributionRank = "contributionRank";
                        }
                        return object;
                    };

                    /**
                     * Converts this Gift to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Gift.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Gift
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.Gift
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Gift.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.Gift";
                    };

                    return Gift;
                })();

                data.Nicoad = (function() {

                    /**
                     * Properties of a Nicoad.
                     * @memberof dwango.nicolive.chat.data
                     * @interface INicoad
                     * @property {dwango.nicolive.chat.data.Nicoad.IV0|null} [v0] Nicoad v0
                     * @property {dwango.nicolive.chat.data.Nicoad.IV1|null} [v1] Nicoad v1
                     */

                    /**
                     * Constructs a new Nicoad.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a Nicoad.
                     * @implements INicoad
                     * @constructor
                     * @param {dwango.nicolive.chat.data.INicoad=} [properties] Properties to set
                     */
                    function Nicoad(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Nicoad v0.
                     * @member {dwango.nicolive.chat.data.Nicoad.IV0|null|undefined} v0
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @instance
                     */
                    Nicoad.prototype.v0 = null;

                    /**
                     * Nicoad v1.
                     * @member {dwango.nicolive.chat.data.Nicoad.IV1|null|undefined} v1
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @instance
                     */
                    Nicoad.prototype.v1 = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Nicoad versions.
                     * @member {"v0"|"v1"|undefined} versions
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @instance
                     */
                    Object.defineProperty(Nicoad.prototype, "versions", {
                        get: $util.oneOfGetter($oneOfFields = ["v0", "v1"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Nicoad instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoad=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.Nicoad} Nicoad instance
                     */
                    Nicoad.create = function create(properties) {
                        return new Nicoad(properties);
                    };

                    /**
                     * Encodes the specified Nicoad message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoad} message Nicoad message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Nicoad.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.v0 != null && Object.hasOwnProperty.call(message, "v0"))
                            $root.dwango.nicolive.chat.data.Nicoad.V0.encode(message.v0, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.v1 != null && Object.hasOwnProperty.call(message, "v1"))
                            $root.dwango.nicolive.chat.data.Nicoad.V1.encode(message.v1, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Nicoad message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoad} message Nicoad message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Nicoad.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Nicoad message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.Nicoad} Nicoad
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Nicoad.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Nicoad();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.v0 = $root.dwango.nicolive.chat.data.Nicoad.V0.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.v1 = $root.dwango.nicolive.chat.data.Nicoad.V1.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Nicoad message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.Nicoad} Nicoad
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Nicoad.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Nicoad message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Nicoad.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.v0 != null && message.hasOwnProperty("v0")) {
                            properties.versions = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Nicoad.V0.verify(message.v0);
                                if (error)
                                    return "v0." + error;
                            }
                        }
                        if (message.v1 != null && message.hasOwnProperty("v1")) {
                            if (properties.versions === 1)
                                return "versions: multiple values";
                            properties.versions = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Nicoad.V1.verify(message.v1);
                                if (error)
                                    return "v1." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Nicoad message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.Nicoad} Nicoad
                     */
                    Nicoad.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.Nicoad)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.Nicoad();
                        if (object.v0 != null) {
                            if (typeof object.v0 !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.Nicoad.v0: object expected");
                            message.v0 = $root.dwango.nicolive.chat.data.Nicoad.V0.fromObject(object.v0);
                        }
                        if (object.v1 != null) {
                            if (typeof object.v1 !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.Nicoad.v1: object expected");
                            message.v1 = $root.dwango.nicolive.chat.data.Nicoad.V1.fromObject(object.v1);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Nicoad message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @static
                     * @param {dwango.nicolive.chat.data.Nicoad} message Nicoad
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Nicoad.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.v0 != null && message.hasOwnProperty("v0")) {
                            object.v0 = $root.dwango.nicolive.chat.data.Nicoad.V0.toObject(message.v0, options);
                            if (options.oneofs)
                                object.versions = "v0";
                        }
                        if (message.v1 != null && message.hasOwnProperty("v1")) {
                            object.v1 = $root.dwango.nicolive.chat.data.Nicoad.V1.toObject(message.v1, options);
                            if (options.oneofs)
                                object.versions = "v1";
                        }
                        return object;
                    };

                    /**
                     * Converts this Nicoad to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Nicoad.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Nicoad
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.Nicoad
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Nicoad.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.Nicoad";
                    };

                    Nicoad.V0 = (function() {

                        /**
                         * Properties of a V0.
                         * @memberof dwango.nicolive.chat.data.Nicoad
                         * @interface IV0
                         * @property {dwango.nicolive.chat.data.Nicoad.V0.ILatest|null} [latest] V0 latest
                         * @property {Array.<dwango.nicolive.chat.data.Nicoad.V0.IRanking>|null} [ranking] V0 ranking
                         * @property {number|null} [totalPoint] V0 totalPoint
                         */

                        /**
                         * Constructs a new V0.
                         * @memberof dwango.nicolive.chat.data.Nicoad
                         * @classdesc Represents a V0.
                         * @implements IV0
                         * @constructor
                         * @param {dwango.nicolive.chat.data.Nicoad.IV0=} [properties] Properties to set
                         */
                        function V0(properties) {
                            this.ranking = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * V0 latest.
                         * @member {dwango.nicolive.chat.data.Nicoad.V0.ILatest|null|undefined} latest
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @instance
                         */
                        V0.prototype.latest = null;

                        /**
                         * V0 ranking.
                         * @member {Array.<dwango.nicolive.chat.data.Nicoad.V0.IRanking>} ranking
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @instance
                         */
                        V0.prototype.ranking = $util.emptyArray;

                        /**
                         * V0 totalPoint.
                         * @member {number} totalPoint
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @instance
                         */
                        V0.prototype.totalPoint = 0;

                        /**
                         * Creates a new V0 instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @static
                         * @param {dwango.nicolive.chat.data.Nicoad.IV0=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.Nicoad.V0} V0 instance
                         */
                        V0.create = function create(properties) {
                            return new V0(properties);
                        };

                        /**
                         * Encodes the specified V0 message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @static
                         * @param {dwango.nicolive.chat.data.Nicoad.IV0} message V0 message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        V0.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.latest != null && Object.hasOwnProperty.call(message, "latest"))
                                $root.dwango.nicolive.chat.data.Nicoad.V0.Latest.encode(message.latest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.ranking != null && message.ranking.length)
                                for (var i = 0; i < message.ranking.length; ++i)
                                    $root.dwango.nicolive.chat.data.Nicoad.V0.Ranking.encode(message.ranking[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.totalPoint != null && Object.hasOwnProperty.call(message, "totalPoint"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalPoint);
                            return writer;
                        };

                        /**
                         * Encodes the specified V0 message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @static
                         * @param {dwango.nicolive.chat.data.Nicoad.IV0} message V0 message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        V0.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a V0 message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.Nicoad.V0} V0
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        V0.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Nicoad.V0();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.latest = $root.dwango.nicolive.chat.data.Nicoad.V0.Latest.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        if (!(message.ranking && message.ranking.length))
                                            message.ranking = [];
                                        message.ranking.push($root.dwango.nicolive.chat.data.Nicoad.V0.Ranking.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 3: {
                                        message.totalPoint = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a V0 message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.Nicoad.V0} V0
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        V0.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a V0 message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        V0.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.latest != null && message.hasOwnProperty("latest")) {
                                var error = $root.dwango.nicolive.chat.data.Nicoad.V0.Latest.verify(message.latest);
                                if (error)
                                    return "latest." + error;
                            }
                            if (message.ranking != null && message.hasOwnProperty("ranking")) {
                                if (!Array.isArray(message.ranking))
                                    return "ranking: array expected";
                                for (var i = 0; i < message.ranking.length; ++i) {
                                    var error = $root.dwango.nicolive.chat.data.Nicoad.V0.Ranking.verify(message.ranking[i]);
                                    if (error)
                                        return "ranking." + error;
                                }
                            }
                            if (message.totalPoint != null && message.hasOwnProperty("totalPoint"))
                                if (!$util.isInteger(message.totalPoint))
                                    return "totalPoint: integer expected";
                            return null;
                        };

                        /**
                         * Creates a V0 message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.Nicoad.V0} V0
                         */
                        V0.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.Nicoad.V0)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.Nicoad.V0();
                            if (object.latest != null) {
                                if (typeof object.latest !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.Nicoad.V0.latest: object expected");
                                message.latest = $root.dwango.nicolive.chat.data.Nicoad.V0.Latest.fromObject(object.latest);
                            }
                            if (object.ranking) {
                                if (!Array.isArray(object.ranking))
                                    throw TypeError(".dwango.nicolive.chat.data.Nicoad.V0.ranking: array expected");
                                message.ranking = [];
                                for (var i = 0; i < object.ranking.length; ++i) {
                                    if (typeof object.ranking[i] !== "object")
                                        throw TypeError(".dwango.nicolive.chat.data.Nicoad.V0.ranking: object expected");
                                    message.ranking[i] = $root.dwango.nicolive.chat.data.Nicoad.V0.Ranking.fromObject(object.ranking[i]);
                                }
                            }
                            if (object.totalPoint != null)
                                message.totalPoint = object.totalPoint | 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a V0 message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @static
                         * @param {dwango.nicolive.chat.data.Nicoad.V0} message V0
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        V0.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.ranking = [];
                            if (options.defaults) {
                                object.latest = null;
                                object.totalPoint = 0;
                            }
                            if (message.latest != null && message.hasOwnProperty("latest"))
                                object.latest = $root.dwango.nicolive.chat.data.Nicoad.V0.Latest.toObject(message.latest, options);
                            if (message.ranking && message.ranking.length) {
                                object.ranking = [];
                                for (var j = 0; j < message.ranking.length; ++j)
                                    object.ranking[j] = $root.dwango.nicolive.chat.data.Nicoad.V0.Ranking.toObject(message.ranking[j], options);
                            }
                            if (message.totalPoint != null && message.hasOwnProperty("totalPoint"))
                                object.totalPoint = message.totalPoint;
                            return object;
                        };

                        /**
                         * Converts this V0 to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        V0.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for V0
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.Nicoad.V0
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        V0.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.Nicoad.V0";
                        };

                        V0.Latest = (function() {

                            /**
                             * Properties of a Latest.
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0
                             * @interface ILatest
                             * @property {string|null} [advertiser] Latest advertiser
                             * @property {number|null} [point] Latest point
                             * @property {string|null} [message] Latest message
                             */

                            /**
                             * Constructs a new Latest.
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0
                             * @classdesc Represents a Latest.
                             * @implements ILatest
                             * @constructor
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.ILatest=} [properties] Properties to set
                             */
                            function Latest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Latest advertiser.
                             * @member {string} advertiser
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @instance
                             */
                            Latest.prototype.advertiser = "";

                            /**
                             * Latest point.
                             * @member {number} point
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @instance
                             */
                            Latest.prototype.point = 0;

                            /**
                             * Latest message.
                             * @member {string|null|undefined} message
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @instance
                             */
                            Latest.prototype.message = null;

                            // OneOf field names bound to virtual getters and setters
                            var $oneOfFields;

                            /**
                             * Latest _message.
                             * @member {"message"|undefined} _message
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @instance
                             */
                            Object.defineProperty(Latest.prototype, "_message", {
                                get: $util.oneOfGetter($oneOfFields = ["message"]),
                                set: $util.oneOfSetter($oneOfFields)
                            });

                            /**
                             * Creates a new Latest instance using the specified properties.
                             * @function create
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @static
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.ILatest=} [properties] Properties to set
                             * @returns {dwango.nicolive.chat.data.Nicoad.V0.Latest} Latest instance
                             */
                            Latest.create = function create(properties) {
                                return new Latest(properties);
                            };

                            /**
                             * Encodes the specified Latest message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.Latest.verify|verify} messages.
                             * @function encode
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @static
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.ILatest} message Latest message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Latest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.advertiser != null && Object.hasOwnProperty.call(message, "advertiser"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.advertiser);
                                if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.point);
                                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                                return writer;
                            };

                            /**
                             * Encodes the specified Latest message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.Latest.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @static
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.ILatest} message Latest message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Latest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a Latest message from the specified reader or buffer.
                             * @function decode
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {dwango.nicolive.chat.data.Nicoad.V0.Latest} Latest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Latest.decode = function decode(reader, length, error) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Nicoad.V0.Latest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    if (tag === error)
                                        break;
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.advertiser = reader.string();
                                            break;
                                        }
                                    case 2: {
                                            message.point = reader.int32();
                                            break;
                                        }
                                    case 3: {
                                            message.message = reader.string();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Latest message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {dwango.nicolive.chat.data.Nicoad.V0.Latest} Latest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Latest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a Latest message.
                             * @function verify
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Latest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                var properties = {};
                                if (message.advertiser != null && message.hasOwnProperty("advertiser"))
                                    if (!$util.isString(message.advertiser))
                                        return "advertiser: string expected";
                                if (message.point != null && message.hasOwnProperty("point"))
                                    if (!$util.isInteger(message.point))
                                        return "point: integer expected";
                                if (message.message != null && message.hasOwnProperty("message")) {
                                    properties._message = 1;
                                    if (!$util.isString(message.message))
                                        return "message: string expected";
                                }
                                return null;
                            };

                            /**
                             * Creates a Latest message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {dwango.nicolive.chat.data.Nicoad.V0.Latest} Latest
                             */
                            Latest.fromObject = function fromObject(object) {
                                if (object instanceof $root.dwango.nicolive.chat.data.Nicoad.V0.Latest)
                                    return object;
                                var message = new $root.dwango.nicolive.chat.data.Nicoad.V0.Latest();
                                if (object.advertiser != null)
                                    message.advertiser = String(object.advertiser);
                                if (object.point != null)
                                    message.point = object.point | 0;
                                if (object.message != null)
                                    message.message = String(object.message);
                                return message;
                            };

                            /**
                             * Creates a plain object from a Latest message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @static
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.Latest} message Latest
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Latest.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.advertiser = "";
                                    object.point = 0;
                                }
                                if (message.advertiser != null && message.hasOwnProperty("advertiser"))
                                    object.advertiser = message.advertiser;
                                if (message.point != null && message.hasOwnProperty("point"))
                                    object.point = message.point;
                                if (message.message != null && message.hasOwnProperty("message")) {
                                    object.message = message.message;
                                    if (options.oneofs)
                                        object._message = "message";
                                }
                                return object;
                            };

                            /**
                             * Converts this Latest to JSON.
                             * @function toJSON
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Latest.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for Latest
                             * @function getTypeUrl
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Latest
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Latest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/dwango.nicolive.chat.data.Nicoad.V0.Latest";
                            };

                            return Latest;
                        })();

                        V0.Ranking = (function() {

                            /**
                             * Properties of a Ranking.
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0
                             * @interface IRanking
                             * @property {string|null} [advertiser] Ranking advertiser
                             * @property {number|null} [rank] Ranking rank
                             * @property {string|null} [message] Ranking message
                             * @property {number|null} [userRank] Ranking userRank
                             */

                            /**
                             * Constructs a new Ranking.
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0
                             * @classdesc Represents a Ranking.
                             * @implements IRanking
                             * @constructor
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.IRanking=} [properties] Properties to set
                             */
                            function Ranking(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Ranking advertiser.
                             * @member {string} advertiser
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @instance
                             */
                            Ranking.prototype.advertiser = "";

                            /**
                             * Ranking rank.
                             * @member {number} rank
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @instance
                             */
                            Ranking.prototype.rank = 0;

                            /**
                             * Ranking message.
                             * @member {string|null|undefined} message
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @instance
                             */
                            Ranking.prototype.message = null;

                            /**
                             * Ranking userRank.
                             * @member {number|null|undefined} userRank
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @instance
                             */
                            Ranking.prototype.userRank = null;

                            // OneOf field names bound to virtual getters and setters
                            var $oneOfFields;

                            /**
                             * Ranking _message.
                             * @member {"message"|undefined} _message
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @instance
                             */
                            Object.defineProperty(Ranking.prototype, "_message", {
                                get: $util.oneOfGetter($oneOfFields = ["message"]),
                                set: $util.oneOfSetter($oneOfFields)
                            });

                            /**
                             * Ranking _userRank.
                             * @member {"userRank"|undefined} _userRank
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @instance
                             */
                            Object.defineProperty(Ranking.prototype, "_userRank", {
                                get: $util.oneOfGetter($oneOfFields = ["userRank"]),
                                set: $util.oneOfSetter($oneOfFields)
                            });

                            /**
                             * Creates a new Ranking instance using the specified properties.
                             * @function create
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @static
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.IRanking=} [properties] Properties to set
                             * @returns {dwango.nicolive.chat.data.Nicoad.V0.Ranking} Ranking instance
                             */
                            Ranking.create = function create(properties) {
                                return new Ranking(properties);
                            };

                            /**
                             * Encodes the specified Ranking message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.Ranking.verify|verify} messages.
                             * @function encode
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @static
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.IRanking} message Ranking message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Ranking.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.advertiser != null && Object.hasOwnProperty.call(message, "advertiser"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.advertiser);
                                if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
                                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                                if (message.userRank != null && Object.hasOwnProperty.call(message, "userRank"))
                                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.userRank);
                                return writer;
                            };

                            /**
                             * Encodes the specified Ranking message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.Ranking.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @static
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.IRanking} message Ranking message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Ranking.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes a Ranking message from the specified reader or buffer.
                             * @function decode
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {dwango.nicolive.chat.data.Nicoad.V0.Ranking} Ranking
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Ranking.decode = function decode(reader, length, error) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Nicoad.V0.Ranking();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    if (tag === error)
                                        break;
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.advertiser = reader.string();
                                            break;
                                        }
                                    case 2: {
                                            message.rank = reader.int32();
                                            break;
                                        }
                                    case 3: {
                                            message.message = reader.string();
                                            break;
                                        }
                                    case 4: {
                                            message.userRank = reader.int32();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Ranking message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {dwango.nicolive.chat.data.Nicoad.V0.Ranking} Ranking
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Ranking.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies a Ranking message.
                             * @function verify
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Ranking.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                var properties = {};
                                if (message.advertiser != null && message.hasOwnProperty("advertiser"))
                                    if (!$util.isString(message.advertiser))
                                        return "advertiser: string expected";
                                if (message.rank != null && message.hasOwnProperty("rank"))
                                    if (!$util.isInteger(message.rank))
                                        return "rank: integer expected";
                                if (message.message != null && message.hasOwnProperty("message")) {
                                    properties._message = 1;
                                    if (!$util.isString(message.message))
                                        return "message: string expected";
                                }
                                if (message.userRank != null && message.hasOwnProperty("userRank")) {
                                    properties._userRank = 1;
                                    if (!$util.isInteger(message.userRank))
                                        return "userRank: integer expected";
                                }
                                return null;
                            };

                            /**
                             * Creates a Ranking message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {dwango.nicolive.chat.data.Nicoad.V0.Ranking} Ranking
                             */
                            Ranking.fromObject = function fromObject(object) {
                                if (object instanceof $root.dwango.nicolive.chat.data.Nicoad.V0.Ranking)
                                    return object;
                                var message = new $root.dwango.nicolive.chat.data.Nicoad.V0.Ranking();
                                if (object.advertiser != null)
                                    message.advertiser = String(object.advertiser);
                                if (object.rank != null)
                                    message.rank = object.rank | 0;
                                if (object.message != null)
                                    message.message = String(object.message);
                                if (object.userRank != null)
                                    message.userRank = object.userRank | 0;
                                return message;
                            };

                            /**
                             * Creates a plain object from a Ranking message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @static
                             * @param {dwango.nicolive.chat.data.Nicoad.V0.Ranking} message Ranking
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Ranking.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.advertiser = "";
                                    object.rank = 0;
                                }
                                if (message.advertiser != null && message.hasOwnProperty("advertiser"))
                                    object.advertiser = message.advertiser;
                                if (message.rank != null && message.hasOwnProperty("rank"))
                                    object.rank = message.rank;
                                if (message.message != null && message.hasOwnProperty("message")) {
                                    object.message = message.message;
                                    if (options.oneofs)
                                        object._message = "message";
                                }
                                if (message.userRank != null && message.hasOwnProperty("userRank")) {
                                    object.userRank = message.userRank;
                                    if (options.oneofs)
                                        object._userRank = "userRank";
                                }
                                return object;
                            };

                            /**
                             * Converts this Ranking to JSON.
                             * @function toJSON
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Ranking.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for Ranking
                             * @function getTypeUrl
                             * @memberof dwango.nicolive.chat.data.Nicoad.V0.Ranking
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Ranking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/dwango.nicolive.chat.data.Nicoad.V0.Ranking";
                            };

                            return Ranking;
                        })();

                        return V0;
                    })();

                    Nicoad.V1 = (function() {

                        /**
                         * Properties of a V1.
                         * @memberof dwango.nicolive.chat.data.Nicoad
                         * @interface IV1
                         * @property {number|null} [totalAdPoint] V1 totalAdPoint
                         * @property {string|null} [message] V1 message
                         */

                        /**
                         * Constructs a new V1.
                         * @memberof dwango.nicolive.chat.data.Nicoad
                         * @classdesc Represents a V1.
                         * @implements IV1
                         * @constructor
                         * @param {dwango.nicolive.chat.data.Nicoad.IV1=} [properties] Properties to set
                         */
                        function V1(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * V1 totalAdPoint.
                         * @member {number} totalAdPoint
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @instance
                         */
                        V1.prototype.totalAdPoint = 0;

                        /**
                         * V1 message.
                         * @member {string} message
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @instance
                         */
                        V1.prototype.message = "";

                        /**
                         * Creates a new V1 instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @static
                         * @param {dwango.nicolive.chat.data.Nicoad.IV1=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.Nicoad.V1} V1 instance
                         */
                        V1.create = function create(properties) {
                            return new V1(properties);
                        };

                        /**
                         * Encodes the specified V1 message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V1.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @static
                         * @param {dwango.nicolive.chat.data.Nicoad.IV1} message V1 message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        V1.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.totalAdPoint != null && Object.hasOwnProperty.call(message, "totalAdPoint"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalAdPoint);
                            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                            return writer;
                        };

                        /**
                         * Encodes the specified V1 message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V1.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @static
                         * @param {dwango.nicolive.chat.data.Nicoad.IV1} message V1 message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        V1.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a V1 message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.Nicoad.V1} V1
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        V1.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Nicoad.V1();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.totalAdPoint = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.message = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a V1 message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.Nicoad.V1} V1
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        V1.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a V1 message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        V1.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.totalAdPoint != null && message.hasOwnProperty("totalAdPoint"))
                                if (!$util.isInteger(message.totalAdPoint))
                                    return "totalAdPoint: integer expected";
                            if (message.message != null && message.hasOwnProperty("message"))
                                if (!$util.isString(message.message))
                                    return "message: string expected";
                            return null;
                        };

                        /**
                         * Creates a V1 message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.Nicoad.V1} V1
                         */
                        V1.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.Nicoad.V1)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.Nicoad.V1();
                            if (object.totalAdPoint != null)
                                message.totalAdPoint = object.totalAdPoint | 0;
                            if (object.message != null)
                                message.message = String(object.message);
                            return message;
                        };

                        /**
                         * Creates a plain object from a V1 message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @static
                         * @param {dwango.nicolive.chat.data.Nicoad.V1} message V1
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        V1.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.totalAdPoint = 0;
                                object.message = "";
                            }
                            if (message.totalAdPoint != null && message.hasOwnProperty("totalAdPoint"))
                                object.totalAdPoint = message.totalAdPoint;
                            if (message.message != null && message.hasOwnProperty("message"))
                                object.message = message.message;
                            return object;
                        };

                        /**
                         * Converts this V1 to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        V1.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for V1
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.Nicoad.V1
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        V1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.Nicoad.V1";
                        };

                        return V1;
                    })();

                    return Nicoad;
                })();

                data.GameUpdate = (function() {

                    /**
                     * Properties of a GameUpdate.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IGameUpdate
                     */

                    /**
                     * Constructs a new GameUpdate.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a GameUpdate.
                     * @implements IGameUpdate
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IGameUpdate=} [properties] Properties to set
                     */
                    function GameUpdate(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new GameUpdate instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @static
                     * @param {dwango.nicolive.chat.data.IGameUpdate=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.GameUpdate} GameUpdate instance
                     */
                    GameUpdate.create = function create(properties) {
                        return new GameUpdate(properties);
                    };

                    /**
                     * Encodes the specified GameUpdate message. Does not implicitly {@link dwango.nicolive.chat.data.GameUpdate.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @static
                     * @param {dwango.nicolive.chat.data.IGameUpdate} message GameUpdate message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameUpdate.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified GameUpdate message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.GameUpdate.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @static
                     * @param {dwango.nicolive.chat.data.IGameUpdate} message GameUpdate message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GameUpdate message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.GameUpdate} GameUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameUpdate.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.GameUpdate();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GameUpdate message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.GameUpdate} GameUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameUpdate.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameUpdate message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameUpdate.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a GameUpdate message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.GameUpdate} GameUpdate
                     */
                    GameUpdate.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.GameUpdate)
                            return object;
                        return new $root.dwango.nicolive.chat.data.GameUpdate();
                    };

                    /**
                     * Creates a plain object from a GameUpdate message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @static
                     * @param {dwango.nicolive.chat.data.GameUpdate} message GameUpdate
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameUpdate.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this GameUpdate to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameUpdate.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for GameUpdate
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.GameUpdate
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    GameUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.GameUpdate";
                    };

                    return GameUpdate;
                })();

                data.TagUpdated = (function() {

                    /**
                     * Properties of a TagUpdated.
                     * @memberof dwango.nicolive.chat.data
                     * @interface ITagUpdated
                     * @property {Array.<dwango.nicolive.chat.data.TagUpdated.ITag>|null} [tags] TagUpdated tags
                     * @property {boolean|null} [ownerLocked] TagUpdated ownerLocked
                     */

                    /**
                     * Constructs a new TagUpdated.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a TagUpdated.
                     * @implements ITagUpdated
                     * @constructor
                     * @param {dwango.nicolive.chat.data.ITagUpdated=} [properties] Properties to set
                     */
                    function TagUpdated(properties) {
                        this.tags = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TagUpdated tags.
                     * @member {Array.<dwango.nicolive.chat.data.TagUpdated.ITag>} tags
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @instance
                     */
                    TagUpdated.prototype.tags = $util.emptyArray;

                    /**
                     * TagUpdated ownerLocked.
                     * @member {boolean} ownerLocked
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @instance
                     */
                    TagUpdated.prototype.ownerLocked = false;

                    /**
                     * Creates a new TagUpdated instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @static
                     * @param {dwango.nicolive.chat.data.ITagUpdated=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.TagUpdated} TagUpdated instance
                     */
                    TagUpdated.create = function create(properties) {
                        return new TagUpdated(properties);
                    };

                    /**
                     * Encodes the specified TagUpdated message. Does not implicitly {@link dwango.nicolive.chat.data.TagUpdated.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @static
                     * @param {dwango.nicolive.chat.data.ITagUpdated} message TagUpdated message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TagUpdated.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tags != null && message.tags.length)
                            for (var i = 0; i < message.tags.length; ++i)
                                $root.dwango.nicolive.chat.data.TagUpdated.Tag.encode(message.tags[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.ownerLocked != null && Object.hasOwnProperty.call(message, "ownerLocked"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ownerLocked);
                        return writer;
                    };

                    /**
                     * Encodes the specified TagUpdated message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.TagUpdated.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @static
                     * @param {dwango.nicolive.chat.data.ITagUpdated} message TagUpdated message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TagUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TagUpdated message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.TagUpdated} TagUpdated
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TagUpdated.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.TagUpdated();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.tags && message.tags.length))
                                        message.tags = [];
                                    message.tags.push($root.dwango.nicolive.chat.data.TagUpdated.Tag.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 2: {
                                    message.ownerLocked = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TagUpdated message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.TagUpdated} TagUpdated
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TagUpdated.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TagUpdated message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TagUpdated.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.tags != null && message.hasOwnProperty("tags")) {
                            if (!Array.isArray(message.tags))
                                return "tags: array expected";
                            for (var i = 0; i < message.tags.length; ++i) {
                                var error = $root.dwango.nicolive.chat.data.TagUpdated.Tag.verify(message.tags[i]);
                                if (error)
                                    return "tags." + error;
                            }
                        }
                        if (message.ownerLocked != null && message.hasOwnProperty("ownerLocked"))
                            if (typeof message.ownerLocked !== "boolean")
                                return "ownerLocked: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a TagUpdated message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.TagUpdated} TagUpdated
                     */
                    TagUpdated.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.TagUpdated)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.TagUpdated();
                        if (object.tags) {
                            if (!Array.isArray(object.tags))
                                throw TypeError(".dwango.nicolive.chat.data.TagUpdated.tags: array expected");
                            message.tags = [];
                            for (var i = 0; i < object.tags.length; ++i) {
                                if (typeof object.tags[i] !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.TagUpdated.tags: object expected");
                                message.tags[i] = $root.dwango.nicolive.chat.data.TagUpdated.Tag.fromObject(object.tags[i]);
                            }
                        }
                        if (object.ownerLocked != null)
                            message.ownerLocked = Boolean(object.ownerLocked);
                        return message;
                    };

                    /**
                     * Creates a plain object from a TagUpdated message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @static
                     * @param {dwango.nicolive.chat.data.TagUpdated} message TagUpdated
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TagUpdated.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.tags = [];
                        if (options.defaults)
                            object.ownerLocked = false;
                        if (message.tags && message.tags.length) {
                            object.tags = [];
                            for (var j = 0; j < message.tags.length; ++j)
                                object.tags[j] = $root.dwango.nicolive.chat.data.TagUpdated.Tag.toObject(message.tags[j], options);
                        }
                        if (message.ownerLocked != null && message.hasOwnProperty("ownerLocked"))
                            object.ownerLocked = message.ownerLocked;
                        return object;
                    };

                    /**
                     * Converts this TagUpdated to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TagUpdated.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for TagUpdated
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.TagUpdated
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    TagUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.TagUpdated";
                    };

                    TagUpdated.Tag = (function() {

                        /**
                         * Properties of a Tag.
                         * @memberof dwango.nicolive.chat.data.TagUpdated
                         * @interface ITag
                         * @property {string|null} [text] Tag text
                         * @property {boolean|null} [locked] Tag locked
                         * @property {boolean|null} [reserved] Tag reserved
                         * @property {string|null} [nicopediaUri] Tag nicopediaUri
                         */

                        /**
                         * Constructs a new Tag.
                         * @memberof dwango.nicolive.chat.data.TagUpdated
                         * @classdesc Represents a Tag.
                         * @implements ITag
                         * @constructor
                         * @param {dwango.nicolive.chat.data.TagUpdated.ITag=} [properties] Properties to set
                         */
                        function Tag(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Tag text.
                         * @member {string} text
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @instance
                         */
                        Tag.prototype.text = "";

                        /**
                         * Tag locked.
                         * @member {boolean} locked
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @instance
                         */
                        Tag.prototype.locked = false;

                        /**
                         * Tag reserved.
                         * @member {boolean} reserved
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @instance
                         */
                        Tag.prototype.reserved = false;

                        /**
                         * Tag nicopediaUri.
                         * @member {string} nicopediaUri
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @instance
                         */
                        Tag.prototype.nicopediaUri = "";

                        /**
                         * Creates a new Tag instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @static
                         * @param {dwango.nicolive.chat.data.TagUpdated.ITag=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.TagUpdated.Tag} Tag instance
                         */
                        Tag.create = function create(properties) {
                            return new Tag(properties);
                        };

                        /**
                         * Encodes the specified Tag message. Does not implicitly {@link dwango.nicolive.chat.data.TagUpdated.Tag.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @static
                         * @param {dwango.nicolive.chat.data.TagUpdated.ITag} message Tag message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Tag.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                            if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.locked);
                            if (message.reserved != null && Object.hasOwnProperty.call(message, "reserved"))
                                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.reserved);
                            if (message.nicopediaUri != null && Object.hasOwnProperty.call(message, "nicopediaUri"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nicopediaUri);
                            return writer;
                        };

                        /**
                         * Encodes the specified Tag message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.TagUpdated.Tag.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @static
                         * @param {dwango.nicolive.chat.data.TagUpdated.ITag} message Tag message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Tag.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Tag message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.TagUpdated.Tag} Tag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Tag.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.TagUpdated.Tag();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.text = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.locked = reader.bool();
                                        break;
                                    }
                                case 3: {
                                        message.reserved = reader.bool();
                                        break;
                                    }
                                case 4: {
                                        message.nicopediaUri = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Tag message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.TagUpdated.Tag} Tag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Tag.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Tag message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Tag.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.text != null && message.hasOwnProperty("text"))
                                if (!$util.isString(message.text))
                                    return "text: string expected";
                            if (message.locked != null && message.hasOwnProperty("locked"))
                                if (typeof message.locked !== "boolean")
                                    return "locked: boolean expected";
                            if (message.reserved != null && message.hasOwnProperty("reserved"))
                                if (typeof message.reserved !== "boolean")
                                    return "reserved: boolean expected";
                            if (message.nicopediaUri != null && message.hasOwnProperty("nicopediaUri"))
                                if (!$util.isString(message.nicopediaUri))
                                    return "nicopediaUri: string expected";
                            return null;
                        };

                        /**
                         * Creates a Tag message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.TagUpdated.Tag} Tag
                         */
                        Tag.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.TagUpdated.Tag)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.TagUpdated.Tag();
                            if (object.text != null)
                                message.text = String(object.text);
                            if (object.locked != null)
                                message.locked = Boolean(object.locked);
                            if (object.reserved != null)
                                message.reserved = Boolean(object.reserved);
                            if (object.nicopediaUri != null)
                                message.nicopediaUri = String(object.nicopediaUri);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Tag message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @static
                         * @param {dwango.nicolive.chat.data.TagUpdated.Tag} message Tag
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Tag.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.text = "";
                                object.locked = false;
                                object.reserved = false;
                                object.nicopediaUri = "";
                            }
                            if (message.text != null && message.hasOwnProperty("text"))
                                object.text = message.text;
                            if (message.locked != null && message.hasOwnProperty("locked"))
                                object.locked = message.locked;
                            if (message.reserved != null && message.hasOwnProperty("reserved"))
                                object.reserved = message.reserved;
                            if (message.nicopediaUri != null && message.hasOwnProperty("nicopediaUri"))
                                object.nicopediaUri = message.nicopediaUri;
                            return object;
                        };

                        /**
                         * Converts this Tag to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Tag.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Tag
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.TagUpdated.Tag
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Tag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.TagUpdated.Tag";
                        };

                        return Tag;
                    })();

                    return TagUpdated;
                })();

                data.atoms = (function() {

                    /**
                     * Namespace atoms.
                     * @memberof dwango.nicolive.chat.data
                     * @namespace
                     */
                    var atoms = {};

                    atoms.ModeratorUpdated = (function() {

                        /**
                         * Properties of a ModeratorUpdated.
                         * @memberof dwango.nicolive.chat.data.atoms
                         * @interface IModeratorUpdated
                         * @property {dwango.nicolive.chat.data.atoms.ModeratorUpdated.ModeratorOperation|null} [operation] ModeratorUpdated operation
                         * @property {dwango.nicolive.chat.data.atoms.IModeratorUserInfo|null} [operator] ModeratorUpdated operator
                         * @property {google.protobuf.ITimestamp|null} [updatedAt] ModeratorUpdated updatedAt
                         */

                        /**
                         * Constructs a new ModeratorUpdated.
                         * @memberof dwango.nicolive.chat.data.atoms
                         * @classdesc Represents a ModeratorUpdated.
                         * @implements IModeratorUpdated
                         * @constructor
                         * @param {dwango.nicolive.chat.data.atoms.IModeratorUpdated=} [properties] Properties to set
                         */
                        function ModeratorUpdated(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ModeratorUpdated operation.
                         * @member {dwango.nicolive.chat.data.atoms.ModeratorUpdated.ModeratorOperation} operation
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @instance
                         */
                        ModeratorUpdated.prototype.operation = 0;

                        /**
                         * ModeratorUpdated operator.
                         * @member {dwango.nicolive.chat.data.atoms.IModeratorUserInfo|null|undefined} operator
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @instance
                         */
                        ModeratorUpdated.prototype.operator = null;

                        /**
                         * ModeratorUpdated updatedAt.
                         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @instance
                         */
                        ModeratorUpdated.prototype.updatedAt = null;

                        /**
                         * Creates a new ModeratorUpdated instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.IModeratorUpdated=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.atoms.ModeratorUpdated} ModeratorUpdated instance
                         */
                        ModeratorUpdated.create = function create(properties) {
                            return new ModeratorUpdated(properties);
                        };

                        /**
                         * Encodes the specified ModeratorUpdated message. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModeratorUpdated.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.IModeratorUpdated} message ModeratorUpdated message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ModeratorUpdated.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operation);
                            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                                $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.encode(message.operator, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified ModeratorUpdated message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModeratorUpdated.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.IModeratorUpdated} message ModeratorUpdated message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ModeratorUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ModeratorUpdated message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.atoms.ModeratorUpdated} ModeratorUpdated
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ModeratorUpdated.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.operation = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.operator = $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ModeratorUpdated message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.atoms.ModeratorUpdated} ModeratorUpdated
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ModeratorUpdated.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ModeratorUpdated message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ModeratorUpdated.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.operation != null && message.hasOwnProperty("operation"))
                                switch (message.operation) {
                                default:
                                    return "operation: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            if (message.operator != null && message.hasOwnProperty("operator")) {
                                var error = $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.verify(message.operator);
                                if (error)
                                    return "operator." + error;
                            }
                            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                                if (error)
                                    return "updatedAt." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a ModeratorUpdated message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.atoms.ModeratorUpdated} ModeratorUpdated
                         */
                        ModeratorUpdated.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated();
                            switch (object.operation) {
                            default:
                                if (typeof object.operation === "number") {
                                    message.operation = object.operation;
                                    break;
                                }
                                break;
                            case "ADD":
                            case 0:
                                message.operation = 0;
                                break;
                            case "DELETE":
                            case 1:
                                message.operation = 1;
                                break;
                            }
                            if (object.operator != null) {
                                if (typeof object.operator !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.atoms.ModeratorUpdated.operator: object expected");
                                message.operator = $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.fromObject(object.operator);
                            }
                            if (object.updatedAt != null) {
                                if (typeof object.updatedAt !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.atoms.ModeratorUpdated.updatedAt: object expected");
                                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a ModeratorUpdated message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.ModeratorUpdated} message ModeratorUpdated
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ModeratorUpdated.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.operation = options.enums === String ? "ADD" : 0;
                                object.operator = null;
                                object.updatedAt = null;
                            }
                            if (message.operation != null && message.hasOwnProperty("operation"))
                                object.operation = options.enums === String ? $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated.ModeratorOperation[message.operation] === undefined ? message.operation : $root.dwango.nicolive.chat.data.atoms.ModeratorUpdated.ModeratorOperation[message.operation] : message.operation;
                            if (message.operator != null && message.hasOwnProperty("operator"))
                                object.operator = $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.toObject(message.operator, options);
                            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                            return object;
                        };

                        /**
                         * Converts this ModeratorUpdated to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ModeratorUpdated.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ModeratorUpdated
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUpdated
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ModeratorUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.atoms.ModeratorUpdated";
                        };

                        /**
                         * ModeratorOperation enum.
                         * @name dwango.nicolive.chat.data.atoms.ModeratorUpdated.ModeratorOperation
                         * @enum {number}
                         * @property {number} ADD=0 ADD value
                         * @property {number} DELETE=1 DELETE value
                         */
                        ModeratorUpdated.ModeratorOperation = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "ADD"] = 0;
                            values[valuesById[1] = "DELETE"] = 1;
                            return values;
                        })();

                        return ModeratorUpdated;
                    })();

                    atoms.ModeratorUserInfo = (function() {

                        /**
                         * Properties of a ModeratorUserInfo.
                         * @memberof dwango.nicolive.chat.data.atoms
                         * @interface IModeratorUserInfo
                         * @property {number|Long|null} [userId] ModeratorUserInfo userId
                         * @property {string|null} [nickname] ModeratorUserInfo nickname
                         * @property {string|null} [iconUrl] ModeratorUserInfo iconUrl
                         */

                        /**
                         * Constructs a new ModeratorUserInfo.
                         * @memberof dwango.nicolive.chat.data.atoms
                         * @classdesc Represents a ModeratorUserInfo.
                         * @implements IModeratorUserInfo
                         * @constructor
                         * @param {dwango.nicolive.chat.data.atoms.IModeratorUserInfo=} [properties] Properties to set
                         */
                        function ModeratorUserInfo(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ModeratorUserInfo userId.
                         * @member {number|Long} userId
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @instance
                         */
                        ModeratorUserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * ModeratorUserInfo nickname.
                         * @member {string|null|undefined} nickname
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @instance
                         */
                        ModeratorUserInfo.prototype.nickname = null;

                        /**
                         * ModeratorUserInfo iconUrl.
                         * @member {string|null|undefined} iconUrl
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @instance
                         */
                        ModeratorUserInfo.prototype.iconUrl = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * ModeratorUserInfo _nickname.
                         * @member {"nickname"|undefined} _nickname
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @instance
                         */
                        Object.defineProperty(ModeratorUserInfo.prototype, "_nickname", {
                            get: $util.oneOfGetter($oneOfFields = ["nickname"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * ModeratorUserInfo _iconUrl.
                         * @member {"iconUrl"|undefined} _iconUrl
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @instance
                         */
                        Object.defineProperty(ModeratorUserInfo.prototype, "_iconUrl", {
                            get: $util.oneOfGetter($oneOfFields = ["iconUrl"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new ModeratorUserInfo instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.IModeratorUserInfo=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.atoms.ModeratorUserInfo} ModeratorUserInfo instance
                         */
                        ModeratorUserInfo.create = function create(properties) {
                            return new ModeratorUserInfo(properties);
                        };

                        /**
                         * Encodes the specified ModeratorUserInfo message. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModeratorUserInfo.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.IModeratorUserInfo} message ModeratorUserInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ModeratorUserInfo.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                            if (message.iconUrl != null && Object.hasOwnProperty.call(message, "iconUrl"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.iconUrl);
                            return writer;
                        };

                        /**
                         * Encodes the specified ModeratorUserInfo message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModeratorUserInfo.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.IModeratorUserInfo} message ModeratorUserInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ModeratorUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ModeratorUserInfo message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.atoms.ModeratorUserInfo} ModeratorUserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ModeratorUserInfo.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.userId = reader.int64();
                                        break;
                                    }
                                case 2: {
                                        message.nickname = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.iconUrl = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ModeratorUserInfo message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.atoms.ModeratorUserInfo} ModeratorUserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ModeratorUserInfo.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ModeratorUserInfo message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ModeratorUserInfo.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.userId != null && message.hasOwnProperty("userId"))
                                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                                    return "userId: integer|Long expected";
                            if (message.nickname != null && message.hasOwnProperty("nickname")) {
                                properties._nickname = 1;
                                if (!$util.isString(message.nickname))
                                    return "nickname: string expected";
                            }
                            if (message.iconUrl != null && message.hasOwnProperty("iconUrl")) {
                                properties._iconUrl = 1;
                                if (!$util.isString(message.iconUrl))
                                    return "iconUrl: string expected";
                            }
                            return null;
                        };

                        /**
                         * Creates a ModeratorUserInfo message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.atoms.ModeratorUserInfo} ModeratorUserInfo
                         */
                        ModeratorUserInfo.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo();
                            if (object.userId != null)
                                if ($util.Long)
                                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                                else if (typeof object.userId === "string")
                                    message.userId = parseInt(object.userId, 10);
                                else if (typeof object.userId === "number")
                                    message.userId = object.userId;
                                else if (typeof object.userId === "object")
                                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                            if (object.nickname != null)
                                message.nickname = String(object.nickname);
                            if (object.iconUrl != null)
                                message.iconUrl = String(object.iconUrl);
                            return message;
                        };

                        /**
                         * Creates a plain object from a ModeratorUserInfo message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.ModeratorUserInfo} message ModeratorUserInfo
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ModeratorUserInfo.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.userId = options.longs === String ? "0" : 0;
                            if (message.userId != null && message.hasOwnProperty("userId"))
                                if (typeof message.userId === "number")
                                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                                else
                                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                            if (message.nickname != null && message.hasOwnProperty("nickname")) {
                                object.nickname = message.nickname;
                                if (options.oneofs)
                                    object._nickname = "nickname";
                            }
                            if (message.iconUrl != null && message.hasOwnProperty("iconUrl")) {
                                object.iconUrl = message.iconUrl;
                                if (options.oneofs)
                                    object._iconUrl = "iconUrl";
                            }
                            return object;
                        };

                        /**
                         * Converts this ModeratorUserInfo to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ModeratorUserInfo.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ModeratorUserInfo
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.atoms.ModeratorUserInfo
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ModeratorUserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.atoms.ModeratorUserInfo";
                        };

                        return ModeratorUserInfo;
                    })();

                    atoms.SSNGUpdated = (function() {

                        /**
                         * Properties of a SSNGUpdated.
                         * @memberof dwango.nicolive.chat.data.atoms
                         * @interface ISSNGUpdated
                         * @property {dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGOperation|null} [operation] SSNGUpdated operation
                         * @property {number|Long|null} [ssngId] SSNGUpdated ssngId
                         * @property {dwango.nicolive.chat.data.atoms.IModeratorUserInfo|null} [operator] SSNGUpdated operator
                         * @property {dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGType|null} [type] SSNGUpdated type
                         * @property {string|null} [source] SSNGUpdated source
                         * @property {google.protobuf.ITimestamp|null} [updatedAt] SSNGUpdated updatedAt
                         */

                        /**
                         * Constructs a new SSNGUpdated.
                         * @memberof dwango.nicolive.chat.data.atoms
                         * @classdesc Represents a SSNGUpdated.
                         * @implements ISSNGUpdated
                         * @constructor
                         * @param {dwango.nicolive.chat.data.atoms.ISSNGUpdated=} [properties] Properties to set
                         */
                        function SSNGUpdated(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * SSNGUpdated operation.
                         * @member {dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGOperation} operation
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         */
                        SSNGUpdated.prototype.operation = 0;

                        /**
                         * SSNGUpdated ssngId.
                         * @member {number|Long} ssngId
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         */
                        SSNGUpdated.prototype.ssngId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * SSNGUpdated operator.
                         * @member {dwango.nicolive.chat.data.atoms.IModeratorUserInfo|null|undefined} operator
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         */
                        SSNGUpdated.prototype.operator = null;

                        /**
                         * SSNGUpdated type.
                         * @member {dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGType|null|undefined} type
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         */
                        SSNGUpdated.prototype.type = null;

                        /**
                         * SSNGUpdated source.
                         * @member {string|null|undefined} source
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         */
                        SSNGUpdated.prototype.source = null;

                        /**
                         * SSNGUpdated updatedAt.
                         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         */
                        SSNGUpdated.prototype.updatedAt = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * SSNGUpdated _type.
                         * @member {"type"|undefined} _type
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         */
                        Object.defineProperty(SSNGUpdated.prototype, "_type", {
                            get: $util.oneOfGetter($oneOfFields = ["type"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * SSNGUpdated _source.
                         * @member {"source"|undefined} _source
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         */
                        Object.defineProperty(SSNGUpdated.prototype, "_source", {
                            get: $util.oneOfGetter($oneOfFields = ["source"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * SSNGUpdated _updatedAt.
                         * @member {"updatedAt"|undefined} _updatedAt
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         */
                        Object.defineProperty(SSNGUpdated.prototype, "_updatedAt", {
                            get: $util.oneOfGetter($oneOfFields = ["updatedAt"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new SSNGUpdated instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.ISSNGUpdated=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.atoms.SSNGUpdated} SSNGUpdated instance
                         */
                        SSNGUpdated.create = function create(properties) {
                            return new SSNGUpdated(properties);
                        };

                        /**
                         * Encodes the specified SSNGUpdated message. Does not implicitly {@link dwango.nicolive.chat.data.atoms.SSNGUpdated.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.ISSNGUpdated} message SSNGUpdated message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SSNGUpdated.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operation);
                            if (message.ssngId != null && Object.hasOwnProperty.call(message, "ssngId"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ssngId);
                            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                                $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.encode(message.operator, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.source);
                            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified SSNGUpdated message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.atoms.SSNGUpdated.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.ISSNGUpdated} message SSNGUpdated message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SSNGUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a SSNGUpdated message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.atoms.SSNGUpdated} SSNGUpdated
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SSNGUpdated.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.atoms.SSNGUpdated();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.operation = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.ssngId = reader.int64();
                                        break;
                                    }
                                case 3: {
                                        message.operator = $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        message.type = reader.int32();
                                        break;
                                    }
                                case 5: {
                                        message.source = reader.string();
                                        break;
                                    }
                                case 6: {
                                        message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a SSNGUpdated message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.atoms.SSNGUpdated} SSNGUpdated
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SSNGUpdated.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a SSNGUpdated message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SSNGUpdated.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.operation != null && message.hasOwnProperty("operation"))
                                switch (message.operation) {
                                default:
                                    return "operation: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            if (message.ssngId != null && message.hasOwnProperty("ssngId"))
                                if (!$util.isInteger(message.ssngId) && !(message.ssngId && $util.isInteger(message.ssngId.low) && $util.isInteger(message.ssngId.high)))
                                    return "ssngId: integer|Long expected";
                            if (message.operator != null && message.hasOwnProperty("operator")) {
                                var error = $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.verify(message.operator);
                                if (error)
                                    return "operator." + error;
                            }
                            if (message.type != null && message.hasOwnProperty("type")) {
                                properties._type = 1;
                                switch (message.type) {
                                default:
                                    return "type: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            }
                            if (message.source != null && message.hasOwnProperty("source")) {
                                properties._source = 1;
                                if (!$util.isString(message.source))
                                    return "source: string expected";
                            }
                            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                                properties._updatedAt = 1;
                                {
                                    var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                                    if (error)
                                        return "updatedAt." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a SSNGUpdated message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.atoms.SSNGUpdated} SSNGUpdated
                         */
                        SSNGUpdated.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.atoms.SSNGUpdated)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.atoms.SSNGUpdated();
                            switch (object.operation) {
                            default:
                                if (typeof object.operation === "number") {
                                    message.operation = object.operation;
                                    break;
                                }
                                break;
                            case "ADD":
                            case 0:
                                message.operation = 0;
                                break;
                            case "DELETE":
                            case 1:
                                message.operation = 1;
                                break;
                            }
                            if (object.ssngId != null)
                                if ($util.Long)
                                    (message.ssngId = $util.Long.fromValue(object.ssngId)).unsigned = false;
                                else if (typeof object.ssngId === "string")
                                    message.ssngId = parseInt(object.ssngId, 10);
                                else if (typeof object.ssngId === "number")
                                    message.ssngId = object.ssngId;
                                else if (typeof object.ssngId === "object")
                                    message.ssngId = new $util.LongBits(object.ssngId.low >>> 0, object.ssngId.high >>> 0).toNumber();
                            if (object.operator != null) {
                                if (typeof object.operator !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.atoms.SSNGUpdated.operator: object expected");
                                message.operator = $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.fromObject(object.operator);
                            }
                            switch (object.type) {
                            default:
                                if (typeof object.type === "number") {
                                    message.type = object.type;
                                    break;
                                }
                                break;
                            case "USER":
                            case 0:
                                message.type = 0;
                                break;
                            case "WORD":
                            case 1:
                                message.type = 1;
                                break;
                            case "COMMAND":
                            case 2:
                                message.type = 2;
                                break;
                            }
                            if (object.source != null)
                                message.source = String(object.source);
                            if (object.updatedAt != null) {
                                if (typeof object.updatedAt !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.atoms.SSNGUpdated.updatedAt: object expected");
                                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a SSNGUpdated message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.SSNGUpdated} message SSNGUpdated
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SSNGUpdated.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.operation = options.enums === String ? "ADD" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.ssngId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.ssngId = options.longs === String ? "0" : 0;
                                object.operator = null;
                            }
                            if (message.operation != null && message.hasOwnProperty("operation"))
                                object.operation = options.enums === String ? $root.dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGOperation[message.operation] === undefined ? message.operation : $root.dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGOperation[message.operation] : message.operation;
                            if (message.ssngId != null && message.hasOwnProperty("ssngId"))
                                if (typeof message.ssngId === "number")
                                    object.ssngId = options.longs === String ? String(message.ssngId) : message.ssngId;
                                else
                                    object.ssngId = options.longs === String ? $util.Long.prototype.toString.call(message.ssngId) : options.longs === Number ? new $util.LongBits(message.ssngId.low >>> 0, message.ssngId.high >>> 0).toNumber() : message.ssngId;
                            if (message.operator != null && message.hasOwnProperty("operator"))
                                object.operator = $root.dwango.nicolive.chat.data.atoms.ModeratorUserInfo.toObject(message.operator, options);
                            if (message.type != null && message.hasOwnProperty("type")) {
                                object.type = options.enums === String ? $root.dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGType[message.type] === undefined ? message.type : $root.dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGType[message.type] : message.type;
                                if (options.oneofs)
                                    object._type = "type";
                            }
                            if (message.source != null && message.hasOwnProperty("source")) {
                                object.source = message.source;
                                if (options.oneofs)
                                    object._source = "source";
                            }
                            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                                if (options.oneofs)
                                    object._updatedAt = "updatedAt";
                            }
                            return object;
                        };

                        /**
                         * Converts this SSNGUpdated to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SSNGUpdated.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for SSNGUpdated
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.atoms.SSNGUpdated
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SSNGUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.atoms.SSNGUpdated";
                        };

                        /**
                         * SSNGOperation enum.
                         * @name dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGOperation
                         * @enum {number}
                         * @property {number} ADD=0 ADD value
                         * @property {number} DELETE=1 DELETE value
                         */
                        SSNGUpdated.SSNGOperation = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "ADD"] = 0;
                            values[valuesById[1] = "DELETE"] = 1;
                            return values;
                        })();

                        /**
                         * SSNGType enum.
                         * @name dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGType
                         * @enum {number}
                         * @property {number} USER=0 USER value
                         * @property {number} WORD=1 WORD value
                         * @property {number} COMMAND=2 COMMAND value
                         */
                        SSNGUpdated.SSNGType = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "USER"] = 0;
                            values[valuesById[1] = "WORD"] = 1;
                            values[valuesById[2] = "COMMAND"] = 2;
                            return values;
                        })();

                        return SSNGUpdated;
                    })();

                    atoms.ModerationAnnouncement = (function() {

                        /**
                         * Properties of a ModerationAnnouncement.
                         * @memberof dwango.nicolive.chat.data.atoms
                         * @interface IModerationAnnouncement
                         * @property {string|null} [message] ModerationAnnouncement message
                         * @property {Array.<dwango.nicolive.chat.data.atoms.ModerationAnnouncement.GuidelineItem>|null} [guidelineItems] ModerationAnnouncement guidelineItems
                         * @property {google.protobuf.ITimestamp|null} [updatedAt] ModerationAnnouncement updatedAt
                         */

                        /**
                         * Constructs a new ModerationAnnouncement.
                         * @memberof dwango.nicolive.chat.data.atoms
                         * @classdesc Represents a ModerationAnnouncement.
                         * @implements IModerationAnnouncement
                         * @constructor
                         * @param {dwango.nicolive.chat.data.atoms.IModerationAnnouncement=} [properties] Properties to set
                         */
                        function ModerationAnnouncement(properties) {
                            this.guidelineItems = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ModerationAnnouncement message.
                         * @member {string|null|undefined} message
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @instance
                         */
                        ModerationAnnouncement.prototype.message = null;

                        /**
                         * ModerationAnnouncement guidelineItems.
                         * @member {Array.<dwango.nicolive.chat.data.atoms.ModerationAnnouncement.GuidelineItem>} guidelineItems
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @instance
                         */
                        ModerationAnnouncement.prototype.guidelineItems = $util.emptyArray;

                        /**
                         * ModerationAnnouncement updatedAt.
                         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @instance
                         */
                        ModerationAnnouncement.prototype.updatedAt = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * ModerationAnnouncement _message.
                         * @member {"message"|undefined} _message
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @instance
                         */
                        Object.defineProperty(ModerationAnnouncement.prototype, "_message", {
                            get: $util.oneOfGetter($oneOfFields = ["message"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new ModerationAnnouncement instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.IModerationAnnouncement=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.atoms.ModerationAnnouncement} ModerationAnnouncement instance
                         */
                        ModerationAnnouncement.create = function create(properties) {
                            return new ModerationAnnouncement(properties);
                        };

                        /**
                         * Encodes the specified ModerationAnnouncement message. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModerationAnnouncement.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.IModerationAnnouncement} message ModerationAnnouncement message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ModerationAnnouncement.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                            if (message.guidelineItems != null && message.guidelineItems.length) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                                for (var i = 0; i < message.guidelineItems.length; ++i)
                                    writer.int32(message.guidelineItems[i]);
                                writer.ldelim();
                            }
                            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified ModerationAnnouncement message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModerationAnnouncement.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.IModerationAnnouncement} message ModerationAnnouncement message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ModerationAnnouncement.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ModerationAnnouncement message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.atoms.ModerationAnnouncement} ModerationAnnouncement
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ModerationAnnouncement.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.message = reader.string();
                                        break;
                                    }
                                case 2: {
                                        if (!(message.guidelineItems && message.guidelineItems.length))
                                            message.guidelineItems = [];
                                        if ((tag & 7) === 2) {
                                            var end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.guidelineItems.push(reader.int32());
                                        } else
                                            message.guidelineItems.push(reader.int32());
                                        break;
                                    }
                                case 3: {
                                        message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ModerationAnnouncement message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.atoms.ModerationAnnouncement} ModerationAnnouncement
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ModerationAnnouncement.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ModerationAnnouncement message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ModerationAnnouncement.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.message != null && message.hasOwnProperty("message")) {
                                properties._message = 1;
                                if (!$util.isString(message.message))
                                    return "message: string expected";
                            }
                            if (message.guidelineItems != null && message.hasOwnProperty("guidelineItems")) {
                                if (!Array.isArray(message.guidelineItems))
                                    return "guidelineItems: array expected";
                                for (var i = 0; i < message.guidelineItems.length; ++i)
                                    switch (message.guidelineItems[i]) {
                                    default:
                                        return "guidelineItems: enum value[] expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                        break;
                                    }
                            }
                            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                                if (error)
                                    return "updatedAt." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a ModerationAnnouncement message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.atoms.ModerationAnnouncement} ModerationAnnouncement
                         */
                        ModerationAnnouncement.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement();
                            if (object.message != null)
                                message.message = String(object.message);
                            if (object.guidelineItems) {
                                if (!Array.isArray(object.guidelineItems))
                                    throw TypeError(".dwango.nicolive.chat.data.atoms.ModerationAnnouncement.guidelineItems: array expected");
                                message.guidelineItems = [];
                                for (var i = 0; i < object.guidelineItems.length; ++i)
                                    switch (object.guidelineItems[i]) {
                                    default:
                                        if (typeof object.guidelineItems[i] === "number") {
                                            message.guidelineItems[i] = object.guidelineItems[i];
                                            break;
                                        }
                                    case "UNKNOWN":
                                    case 0:
                                        message.guidelineItems[i] = 0;
                                        break;
                                    case "SEXUAL":
                                    case 1:
                                        message.guidelineItems[i] = 1;
                                        break;
                                    case "SPAM":
                                    case 2:
                                        message.guidelineItems[i] = 2;
                                        break;
                                    case "SLANDER":
                                    case 3:
                                        message.guidelineItems[i] = 3;
                                        break;
                                    case "PERSONAL_INFORMATION":
                                    case 4:
                                        message.guidelineItems[i] = 4;
                                        break;
                                    }
                            }
                            if (object.updatedAt != null) {
                                if (typeof object.updatedAt !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.atoms.ModerationAnnouncement.updatedAt: object expected");
                                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a ModerationAnnouncement message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @static
                         * @param {dwango.nicolive.chat.data.atoms.ModerationAnnouncement} message ModerationAnnouncement
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ModerationAnnouncement.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.guidelineItems = [];
                            if (options.defaults)
                                object.updatedAt = null;
                            if (message.message != null && message.hasOwnProperty("message")) {
                                object.message = message.message;
                                if (options.oneofs)
                                    object._message = "message";
                            }
                            if (message.guidelineItems && message.guidelineItems.length) {
                                object.guidelineItems = [];
                                for (var j = 0; j < message.guidelineItems.length; ++j)
                                    object.guidelineItems[j] = options.enums === String ? $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement.GuidelineItem[message.guidelineItems[j]] === undefined ? message.guidelineItems[j] : $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement.GuidelineItem[message.guidelineItems[j]] : message.guidelineItems[j];
                            }
                            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                            return object;
                        };

                        /**
                         * Converts this ModerationAnnouncement to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ModerationAnnouncement.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ModerationAnnouncement
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.atoms.ModerationAnnouncement
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ModerationAnnouncement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.atoms.ModerationAnnouncement";
                        };

                        /**
                         * GuidelineItem enum.
                         * @name dwango.nicolive.chat.data.atoms.ModerationAnnouncement.GuidelineItem
                         * @enum {number}
                         * @property {number} UNKNOWN=0 UNKNOWN value
                         * @property {number} SEXUAL=1 SEXUAL value
                         * @property {number} SPAM=2 SPAM value
                         * @property {number} SLANDER=3 SLANDER value
                         * @property {number} PERSONAL_INFORMATION=4 PERSONAL_INFORMATION value
                         */
                        ModerationAnnouncement.GuidelineItem = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "UNKNOWN"] = 0;
                            values[valuesById[1] = "SEXUAL"] = 1;
                            values[valuesById[2] = "SPAM"] = 2;
                            values[valuesById[3] = "SLANDER"] = 3;
                            values[valuesById[4] = "PERSONAL_INFORMATION"] = 4;
                            return values;
                        })();

                        return ModerationAnnouncement;
                    })();

                    return atoms;
                })();

                data.NicoliveState = (function() {

                    /**
                     * Properties of a NicoliveState.
                     * @memberof dwango.nicolive.chat.data
                     * @interface INicoliveState
                     * @property {dwango.nicolive.chat.data.IStatistics|null} [statistics] NicoliveState statistics
                     * @property {dwango.nicolive.chat.data.IEnquete|null} [enquete] NicoliveState enquete
                     * @property {dwango.nicolive.chat.data.IMoveOrder|null} [moveOrder] NicoliveState moveOrder
                     * @property {dwango.nicolive.chat.data.IMarque|null} [marque] NicoliveState marque
                     * @property {dwango.nicolive.chat.data.ICommentLock|null} [commentLock] NicoliveState commentLock
                     * @property {dwango.nicolive.chat.data.ICommentMode|null} [commentMode] NicoliveState commentMode
                     * @property {dwango.nicolive.chat.data.ITrialPanel|null} [trialPanel] NicoliveState trialPanel
                     * @property {dwango.nicolive.chat.data.IFingerPrint|null} [fingerPrint] NicoliveState fingerPrint
                     * @property {dwango.nicolive.chat.data.IProgramStatus|null} [programStatus] NicoliveState programStatus
                     * @property {dwango.nicolive.chat.data.atoms.IModerationAnnouncement|null} [moderationAnnouncement] NicoliveState moderationAnnouncement
                     */

                    /**
                     * Constructs a new NicoliveState.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a NicoliveState.
                     * @implements INicoliveState
                     * @constructor
                     * @param {dwango.nicolive.chat.data.INicoliveState=} [properties] Properties to set
                     */
                    function NicoliveState(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * NicoliveState statistics.
                     * @member {dwango.nicolive.chat.data.IStatistics|null|undefined} statistics
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.statistics = null;

                    /**
                     * NicoliveState enquete.
                     * @member {dwango.nicolive.chat.data.IEnquete|null|undefined} enquete
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.enquete = null;

                    /**
                     * NicoliveState moveOrder.
                     * @member {dwango.nicolive.chat.data.IMoveOrder|null|undefined} moveOrder
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.moveOrder = null;

                    /**
                     * NicoliveState marque.
                     * @member {dwango.nicolive.chat.data.IMarque|null|undefined} marque
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.marque = null;

                    /**
                     * NicoliveState commentLock.
                     * @member {dwango.nicolive.chat.data.ICommentLock|null|undefined} commentLock
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.commentLock = null;

                    /**
                     * NicoliveState commentMode.
                     * @member {dwango.nicolive.chat.data.ICommentMode|null|undefined} commentMode
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.commentMode = null;

                    /**
                     * NicoliveState trialPanel.
                     * @member {dwango.nicolive.chat.data.ITrialPanel|null|undefined} trialPanel
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.trialPanel = null;

                    /**
                     * NicoliveState fingerPrint.
                     * @member {dwango.nicolive.chat.data.IFingerPrint|null|undefined} fingerPrint
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.fingerPrint = null;

                    /**
                     * NicoliveState programStatus.
                     * @member {dwango.nicolive.chat.data.IProgramStatus|null|undefined} programStatus
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.programStatus = null;

                    /**
                     * NicoliveState moderationAnnouncement.
                     * @member {dwango.nicolive.chat.data.atoms.IModerationAnnouncement|null|undefined} moderationAnnouncement
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    NicoliveState.prototype.moderationAnnouncement = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * NicoliveState _statistics.
                     * @member {"statistics"|undefined} _statistics
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_statistics", {
                        get: $util.oneOfGetter($oneOfFields = ["statistics"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * NicoliveState _enquete.
                     * @member {"enquete"|undefined} _enquete
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_enquete", {
                        get: $util.oneOfGetter($oneOfFields = ["enquete"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * NicoliveState _moveOrder.
                     * @member {"moveOrder"|undefined} _moveOrder
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_moveOrder", {
                        get: $util.oneOfGetter($oneOfFields = ["moveOrder"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * NicoliveState _marque.
                     * @member {"marque"|undefined} _marque
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_marque", {
                        get: $util.oneOfGetter($oneOfFields = ["marque"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * NicoliveState _commentLock.
                     * @member {"commentLock"|undefined} _commentLock
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_commentLock", {
                        get: $util.oneOfGetter($oneOfFields = ["commentLock"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * NicoliveState _commentMode.
                     * @member {"commentMode"|undefined} _commentMode
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_commentMode", {
                        get: $util.oneOfGetter($oneOfFields = ["commentMode"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * NicoliveState _trialPanel.
                     * @member {"trialPanel"|undefined} _trialPanel
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_trialPanel", {
                        get: $util.oneOfGetter($oneOfFields = ["trialPanel"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * NicoliveState _fingerPrint.
                     * @member {"fingerPrint"|undefined} _fingerPrint
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_fingerPrint", {
                        get: $util.oneOfGetter($oneOfFields = ["fingerPrint"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * NicoliveState _programStatus.
                     * @member {"programStatus"|undefined} _programStatus
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_programStatus", {
                        get: $util.oneOfGetter($oneOfFields = ["programStatus"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * NicoliveState _moderationAnnouncement.
                     * @member {"moderationAnnouncement"|undefined} _moderationAnnouncement
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     */
                    Object.defineProperty(NicoliveState.prototype, "_moderationAnnouncement", {
                        get: $util.oneOfGetter($oneOfFields = ["moderationAnnouncement"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new NicoliveState instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoliveState=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.NicoliveState} NicoliveState instance
                     */
                    NicoliveState.create = function create(properties) {
                        return new NicoliveState(properties);
                    };

                    /**
                     * Encodes the specified NicoliveState message. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveState.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoliveState} message NicoliveState message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NicoliveState.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.statistics != null && Object.hasOwnProperty.call(message, "statistics"))
                            $root.dwango.nicolive.chat.data.Statistics.encode(message.statistics, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.enquete != null && Object.hasOwnProperty.call(message, "enquete"))
                            $root.dwango.nicolive.chat.data.Enquete.encode(message.enquete, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.moveOrder != null && Object.hasOwnProperty.call(message, "moveOrder"))
                            $root.dwango.nicolive.chat.data.MoveOrder.encode(message.moveOrder, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.marque != null && Object.hasOwnProperty.call(message, "marque"))
                            $root.dwango.nicolive.chat.data.Marque.encode(message.marque, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.commentLock != null && Object.hasOwnProperty.call(message, "commentLock"))
                            $root.dwango.nicolive.chat.data.CommentLock.encode(message.commentLock, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.commentMode != null && Object.hasOwnProperty.call(message, "commentMode"))
                            $root.dwango.nicolive.chat.data.CommentMode.encode(message.commentMode, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.trialPanel != null && Object.hasOwnProperty.call(message, "trialPanel"))
                            $root.dwango.nicolive.chat.data.TrialPanel.encode(message.trialPanel, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.fingerPrint != null && Object.hasOwnProperty.call(message, "fingerPrint"))
                            $root.dwango.nicolive.chat.data.FingerPrint.encode(message.fingerPrint, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.programStatus != null && Object.hasOwnProperty.call(message, "programStatus"))
                            $root.dwango.nicolive.chat.data.ProgramStatus.encode(message.programStatus, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.moderationAnnouncement != null && Object.hasOwnProperty.call(message, "moderationAnnouncement"))
                            $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement.encode(message.moderationAnnouncement, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified NicoliveState message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveState.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoliveState} message NicoliveState message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NicoliveState.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a NicoliveState message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.NicoliveState} NicoliveState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NicoliveState.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.NicoliveState();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.statistics = $root.dwango.nicolive.chat.data.Statistics.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.enquete = $root.dwango.nicolive.chat.data.Enquete.decode(reader, reader.uint32());
                                    break;
                                }
                            case 3: {
                                    message.moveOrder = $root.dwango.nicolive.chat.data.MoveOrder.decode(reader, reader.uint32());
                                    break;
                                }
                            case 4: {
                                    message.marque = $root.dwango.nicolive.chat.data.Marque.decode(reader, reader.uint32());
                                    break;
                                }
                            case 5: {
                                    message.commentLock = $root.dwango.nicolive.chat.data.CommentLock.decode(reader, reader.uint32());
                                    break;
                                }
                            case 6: {
                                    message.commentMode = $root.dwango.nicolive.chat.data.CommentMode.decode(reader, reader.uint32());
                                    break;
                                }
                            case 7: {
                                    message.trialPanel = $root.dwango.nicolive.chat.data.TrialPanel.decode(reader, reader.uint32());
                                    break;
                                }
                            case 8: {
                                    message.fingerPrint = $root.dwango.nicolive.chat.data.FingerPrint.decode(reader, reader.uint32());
                                    break;
                                }
                            case 9: {
                                    message.programStatus = $root.dwango.nicolive.chat.data.ProgramStatus.decode(reader, reader.uint32());
                                    break;
                                }
                            case 10: {
                                    message.moderationAnnouncement = $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a NicoliveState message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.NicoliveState} NicoliveState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NicoliveState.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NicoliveState message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NicoliveState.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.statistics != null && message.hasOwnProperty("statistics")) {
                            properties._statistics = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Statistics.verify(message.statistics);
                                if (error)
                                    return "statistics." + error;
                            }
                        }
                        if (message.enquete != null && message.hasOwnProperty("enquete")) {
                            properties._enquete = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Enquete.verify(message.enquete);
                                if (error)
                                    return "enquete." + error;
                            }
                        }
                        if (message.moveOrder != null && message.hasOwnProperty("moveOrder")) {
                            properties._moveOrder = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.MoveOrder.verify(message.moveOrder);
                                if (error)
                                    return "moveOrder." + error;
                            }
                        }
                        if (message.marque != null && message.hasOwnProperty("marque")) {
                            properties._marque = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Marque.verify(message.marque);
                                if (error)
                                    return "marque." + error;
                            }
                        }
                        if (message.commentLock != null && message.hasOwnProperty("commentLock")) {
                            properties._commentLock = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.CommentLock.verify(message.commentLock);
                                if (error)
                                    return "commentLock." + error;
                            }
                        }
                        if (message.commentMode != null && message.hasOwnProperty("commentMode")) {
                            properties._commentMode = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.CommentMode.verify(message.commentMode);
                                if (error)
                                    return "commentMode." + error;
                            }
                        }
                        if (message.trialPanel != null && message.hasOwnProperty("trialPanel")) {
                            properties._trialPanel = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.TrialPanel.verify(message.trialPanel);
                                if (error)
                                    return "trialPanel." + error;
                            }
                        }
                        if (message.fingerPrint != null && message.hasOwnProperty("fingerPrint")) {
                            properties._fingerPrint = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.FingerPrint.verify(message.fingerPrint);
                                if (error)
                                    return "fingerPrint." + error;
                            }
                        }
                        if (message.programStatus != null && message.hasOwnProperty("programStatus")) {
                            properties._programStatus = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.ProgramStatus.verify(message.programStatus);
                                if (error)
                                    return "programStatus." + error;
                            }
                        }
                        if (message.moderationAnnouncement != null && message.hasOwnProperty("moderationAnnouncement")) {
                            properties._moderationAnnouncement = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement.verify(message.moderationAnnouncement);
                                if (error)
                                    return "moderationAnnouncement." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a NicoliveState message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.NicoliveState} NicoliveState
                     */
                    NicoliveState.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.NicoliveState)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.NicoliveState();
                        if (object.statistics != null) {
                            if (typeof object.statistics !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.statistics: object expected");
                            message.statistics = $root.dwango.nicolive.chat.data.Statistics.fromObject(object.statistics);
                        }
                        if (object.enquete != null) {
                            if (typeof object.enquete !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.enquete: object expected");
                            message.enquete = $root.dwango.nicolive.chat.data.Enquete.fromObject(object.enquete);
                        }
                        if (object.moveOrder != null) {
                            if (typeof object.moveOrder !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.moveOrder: object expected");
                            message.moveOrder = $root.dwango.nicolive.chat.data.MoveOrder.fromObject(object.moveOrder);
                        }
                        if (object.marque != null) {
                            if (typeof object.marque !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.marque: object expected");
                            message.marque = $root.dwango.nicolive.chat.data.Marque.fromObject(object.marque);
                        }
                        if (object.commentLock != null) {
                            if (typeof object.commentLock !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.commentLock: object expected");
                            message.commentLock = $root.dwango.nicolive.chat.data.CommentLock.fromObject(object.commentLock);
                        }
                        if (object.commentMode != null) {
                            if (typeof object.commentMode !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.commentMode: object expected");
                            message.commentMode = $root.dwango.nicolive.chat.data.CommentMode.fromObject(object.commentMode);
                        }
                        if (object.trialPanel != null) {
                            if (typeof object.trialPanel !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.trialPanel: object expected");
                            message.trialPanel = $root.dwango.nicolive.chat.data.TrialPanel.fromObject(object.trialPanel);
                        }
                        if (object.fingerPrint != null) {
                            if (typeof object.fingerPrint !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.fingerPrint: object expected");
                            message.fingerPrint = $root.dwango.nicolive.chat.data.FingerPrint.fromObject(object.fingerPrint);
                        }
                        if (object.programStatus != null) {
                            if (typeof object.programStatus !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.programStatus: object expected");
                            message.programStatus = $root.dwango.nicolive.chat.data.ProgramStatus.fromObject(object.programStatus);
                        }
                        if (object.moderationAnnouncement != null) {
                            if (typeof object.moderationAnnouncement !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveState.moderationAnnouncement: object expected");
                            message.moderationAnnouncement = $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement.fromObject(object.moderationAnnouncement);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a NicoliveState message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @static
                     * @param {dwango.nicolive.chat.data.NicoliveState} message NicoliveState
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NicoliveState.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.statistics != null && message.hasOwnProperty("statistics")) {
                            object.statistics = $root.dwango.nicolive.chat.data.Statistics.toObject(message.statistics, options);
                            if (options.oneofs)
                                object._statistics = "statistics";
                        }
                        if (message.enquete != null && message.hasOwnProperty("enquete")) {
                            object.enquete = $root.dwango.nicolive.chat.data.Enquete.toObject(message.enquete, options);
                            if (options.oneofs)
                                object._enquete = "enquete";
                        }
                        if (message.moveOrder != null && message.hasOwnProperty("moveOrder")) {
                            object.moveOrder = $root.dwango.nicolive.chat.data.MoveOrder.toObject(message.moveOrder, options);
                            if (options.oneofs)
                                object._moveOrder = "moveOrder";
                        }
                        if (message.marque != null && message.hasOwnProperty("marque")) {
                            object.marque = $root.dwango.nicolive.chat.data.Marque.toObject(message.marque, options);
                            if (options.oneofs)
                                object._marque = "marque";
                        }
                        if (message.commentLock != null && message.hasOwnProperty("commentLock")) {
                            object.commentLock = $root.dwango.nicolive.chat.data.CommentLock.toObject(message.commentLock, options);
                            if (options.oneofs)
                                object._commentLock = "commentLock";
                        }
                        if (message.commentMode != null && message.hasOwnProperty("commentMode")) {
                            object.commentMode = $root.dwango.nicolive.chat.data.CommentMode.toObject(message.commentMode, options);
                            if (options.oneofs)
                                object._commentMode = "commentMode";
                        }
                        if (message.trialPanel != null && message.hasOwnProperty("trialPanel")) {
                            object.trialPanel = $root.dwango.nicolive.chat.data.TrialPanel.toObject(message.trialPanel, options);
                            if (options.oneofs)
                                object._trialPanel = "trialPanel";
                        }
                        if (message.fingerPrint != null && message.hasOwnProperty("fingerPrint")) {
                            object.fingerPrint = $root.dwango.nicolive.chat.data.FingerPrint.toObject(message.fingerPrint, options);
                            if (options.oneofs)
                                object._fingerPrint = "fingerPrint";
                        }
                        if (message.programStatus != null && message.hasOwnProperty("programStatus")) {
                            object.programStatus = $root.dwango.nicolive.chat.data.ProgramStatus.toObject(message.programStatus, options);
                            if (options.oneofs)
                                object._programStatus = "programStatus";
                        }
                        if (message.moderationAnnouncement != null && message.hasOwnProperty("moderationAnnouncement")) {
                            object.moderationAnnouncement = $root.dwango.nicolive.chat.data.atoms.ModerationAnnouncement.toObject(message.moderationAnnouncement, options);
                            if (options.oneofs)
                                object._moderationAnnouncement = "moderationAnnouncement";
                        }
                        return object;
                    };

                    /**
                     * Converts this NicoliveState to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NicoliveState.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for NicoliveState
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.NicoliveState
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    NicoliveState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.NicoliveState";
                    };

                    return NicoliveState;
                })();

                data.Statistics = (function() {

                    /**
                     * Properties of a Statistics.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IStatistics
                     * @property {number|Long|null} [viewers] Statistics viewers
                     * @property {number|Long|null} [comments] Statistics comments
                     * @property {number|Long|null} [adPoints] Statistics adPoints
                     * @property {number|Long|null} [giftPoints] Statistics giftPoints
                     */

                    /**
                     * Constructs a new Statistics.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a Statistics.
                     * @implements IStatistics
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IStatistics=} [properties] Properties to set
                     */
                    function Statistics(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Statistics viewers.
                     * @member {number|Long|null|undefined} viewers
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @instance
                     */
                    Statistics.prototype.viewers = null;

                    /**
                     * Statistics comments.
                     * @member {number|Long|null|undefined} comments
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @instance
                     */
                    Statistics.prototype.comments = null;

                    /**
                     * Statistics adPoints.
                     * @member {number|Long|null|undefined} adPoints
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @instance
                     */
                    Statistics.prototype.adPoints = null;

                    /**
                     * Statistics giftPoints.
                     * @member {number|Long|null|undefined} giftPoints
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @instance
                     */
                    Statistics.prototype.giftPoints = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Statistics _viewers.
                     * @member {"viewers"|undefined} _viewers
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @instance
                     */
                    Object.defineProperty(Statistics.prototype, "_viewers", {
                        get: $util.oneOfGetter($oneOfFields = ["viewers"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Statistics _comments.
                     * @member {"comments"|undefined} _comments
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @instance
                     */
                    Object.defineProperty(Statistics.prototype, "_comments", {
                        get: $util.oneOfGetter($oneOfFields = ["comments"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Statistics _adPoints.
                     * @member {"adPoints"|undefined} _adPoints
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @instance
                     */
                    Object.defineProperty(Statistics.prototype, "_adPoints", {
                        get: $util.oneOfGetter($oneOfFields = ["adPoints"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Statistics _giftPoints.
                     * @member {"giftPoints"|undefined} _giftPoints
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @instance
                     */
                    Object.defineProperty(Statistics.prototype, "_giftPoints", {
                        get: $util.oneOfGetter($oneOfFields = ["giftPoints"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Statistics instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @static
                     * @param {dwango.nicolive.chat.data.IStatistics=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.Statistics} Statistics instance
                     */
                    Statistics.create = function create(properties) {
                        return new Statistics(properties);
                    };

                    /**
                     * Encodes the specified Statistics message. Does not implicitly {@link dwango.nicolive.chat.data.Statistics.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @static
                     * @param {dwango.nicolive.chat.data.IStatistics} message Statistics message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Statistics.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.viewers != null && Object.hasOwnProperty.call(message, "viewers"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.viewers);
                        if (message.comments != null && Object.hasOwnProperty.call(message, "comments"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.comments);
                        if (message.adPoints != null && Object.hasOwnProperty.call(message, "adPoints"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.adPoints);
                        if (message.giftPoints != null && Object.hasOwnProperty.call(message, "giftPoints"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.giftPoints);
                        return writer;
                    };

                    /**
                     * Encodes the specified Statistics message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Statistics.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @static
                     * @param {dwango.nicolive.chat.data.IStatistics} message Statistics message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Statistics.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Statistics message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.Statistics} Statistics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Statistics.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Statistics();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.viewers = reader.int64();
                                    break;
                                }
                            case 2: {
                                    message.comments = reader.int64();
                                    break;
                                }
                            case 3: {
                                    message.adPoints = reader.int64();
                                    break;
                                }
                            case 4: {
                                    message.giftPoints = reader.int64();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Statistics message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.Statistics} Statistics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Statistics.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Statistics message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Statistics.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.viewers != null && message.hasOwnProperty("viewers")) {
                            properties._viewers = 1;
                            if (!$util.isInteger(message.viewers) && !(message.viewers && $util.isInteger(message.viewers.low) && $util.isInteger(message.viewers.high)))
                                return "viewers: integer|Long expected";
                        }
                        if (message.comments != null && message.hasOwnProperty("comments")) {
                            properties._comments = 1;
                            if (!$util.isInteger(message.comments) && !(message.comments && $util.isInteger(message.comments.low) && $util.isInteger(message.comments.high)))
                                return "comments: integer|Long expected";
                        }
                        if (message.adPoints != null && message.hasOwnProperty("adPoints")) {
                            properties._adPoints = 1;
                            if (!$util.isInteger(message.adPoints) && !(message.adPoints && $util.isInteger(message.adPoints.low) && $util.isInteger(message.adPoints.high)))
                                return "adPoints: integer|Long expected";
                        }
                        if (message.giftPoints != null && message.hasOwnProperty("giftPoints")) {
                            properties._giftPoints = 1;
                            if (!$util.isInteger(message.giftPoints) && !(message.giftPoints && $util.isInteger(message.giftPoints.low) && $util.isInteger(message.giftPoints.high)))
                                return "giftPoints: integer|Long expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Statistics message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.Statistics} Statistics
                     */
                    Statistics.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.Statistics)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.Statistics();
                        if (object.viewers != null)
                            if ($util.Long)
                                (message.viewers = $util.Long.fromValue(object.viewers)).unsigned = false;
                            else if (typeof object.viewers === "string")
                                message.viewers = parseInt(object.viewers, 10);
                            else if (typeof object.viewers === "number")
                                message.viewers = object.viewers;
                            else if (typeof object.viewers === "object")
                                message.viewers = new $util.LongBits(object.viewers.low >>> 0, object.viewers.high >>> 0).toNumber();
                        if (object.comments != null)
                            if ($util.Long)
                                (message.comments = $util.Long.fromValue(object.comments)).unsigned = false;
                            else if (typeof object.comments === "string")
                                message.comments = parseInt(object.comments, 10);
                            else if (typeof object.comments === "number")
                                message.comments = object.comments;
                            else if (typeof object.comments === "object")
                                message.comments = new $util.LongBits(object.comments.low >>> 0, object.comments.high >>> 0).toNumber();
                        if (object.adPoints != null)
                            if ($util.Long)
                                (message.adPoints = $util.Long.fromValue(object.adPoints)).unsigned = false;
                            else if (typeof object.adPoints === "string")
                                message.adPoints = parseInt(object.adPoints, 10);
                            else if (typeof object.adPoints === "number")
                                message.adPoints = object.adPoints;
                            else if (typeof object.adPoints === "object")
                                message.adPoints = new $util.LongBits(object.adPoints.low >>> 0, object.adPoints.high >>> 0).toNumber();
                        if (object.giftPoints != null)
                            if ($util.Long)
                                (message.giftPoints = $util.Long.fromValue(object.giftPoints)).unsigned = false;
                            else if (typeof object.giftPoints === "string")
                                message.giftPoints = parseInt(object.giftPoints, 10);
                            else if (typeof object.giftPoints === "number")
                                message.giftPoints = object.giftPoints;
                            else if (typeof object.giftPoints === "object")
                                message.giftPoints = new $util.LongBits(object.giftPoints.low >>> 0, object.giftPoints.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a Statistics message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @static
                     * @param {dwango.nicolive.chat.data.Statistics} message Statistics
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Statistics.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.viewers != null && message.hasOwnProperty("viewers")) {
                            if (typeof message.viewers === "number")
                                object.viewers = options.longs === String ? String(message.viewers) : message.viewers;
                            else
                                object.viewers = options.longs === String ? $util.Long.prototype.toString.call(message.viewers) : options.longs === Number ? new $util.LongBits(message.viewers.low >>> 0, message.viewers.high >>> 0).toNumber() : message.viewers;
                            if (options.oneofs)
                                object._viewers = "viewers";
                        }
                        if (message.comments != null && message.hasOwnProperty("comments")) {
                            if (typeof message.comments === "number")
                                object.comments = options.longs === String ? String(message.comments) : message.comments;
                            else
                                object.comments = options.longs === String ? $util.Long.prototype.toString.call(message.comments) : options.longs === Number ? new $util.LongBits(message.comments.low >>> 0, message.comments.high >>> 0).toNumber() : message.comments;
                            if (options.oneofs)
                                object._comments = "comments";
                        }
                        if (message.adPoints != null && message.hasOwnProperty("adPoints")) {
                            if (typeof message.adPoints === "number")
                                object.adPoints = options.longs === String ? String(message.adPoints) : message.adPoints;
                            else
                                object.adPoints = options.longs === String ? $util.Long.prototype.toString.call(message.adPoints) : options.longs === Number ? new $util.LongBits(message.adPoints.low >>> 0, message.adPoints.high >>> 0).toNumber() : message.adPoints;
                            if (options.oneofs)
                                object._adPoints = "adPoints";
                        }
                        if (message.giftPoints != null && message.hasOwnProperty("giftPoints")) {
                            if (typeof message.giftPoints === "number")
                                object.giftPoints = options.longs === String ? String(message.giftPoints) : message.giftPoints;
                            else
                                object.giftPoints = options.longs === String ? $util.Long.prototype.toString.call(message.giftPoints) : options.longs === Number ? new $util.LongBits(message.giftPoints.low >>> 0, message.giftPoints.high >>> 0).toNumber() : message.giftPoints;
                            if (options.oneofs)
                                object._giftPoints = "giftPoints";
                        }
                        return object;
                    };

                    /**
                     * Converts this Statistics to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Statistics.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Statistics
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.Statistics
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Statistics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.Statistics";
                    };

                    return Statistics;
                })();

                data.Enquete = (function() {

                    /**
                     * Properties of an Enquete.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IEnquete
                     * @property {string|null} [question] Enquete question
                     * @property {Array.<dwango.nicolive.chat.data.Enquete.IChoice>|null} [choices] Enquete choices
                     * @property {dwango.nicolive.chat.data.Enquete.Status|null} [status] Enquete status
                     */

                    /**
                     * Constructs a new Enquete.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents an Enquete.
                     * @implements IEnquete
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IEnquete=} [properties] Properties to set
                     */
                    function Enquete(properties) {
                        this.choices = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Enquete question.
                     * @member {string} question
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @instance
                     */
                    Enquete.prototype.question = "";

                    /**
                     * Enquete choices.
                     * @member {Array.<dwango.nicolive.chat.data.Enquete.IChoice>} choices
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @instance
                     */
                    Enquete.prototype.choices = $util.emptyArray;

                    /**
                     * Enquete status.
                     * @member {dwango.nicolive.chat.data.Enquete.Status} status
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @instance
                     */
                    Enquete.prototype.status = 0;

                    /**
                     * Creates a new Enquete instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @static
                     * @param {dwango.nicolive.chat.data.IEnquete=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.Enquete} Enquete instance
                     */
                    Enquete.create = function create(properties) {
                        return new Enquete(properties);
                    };

                    /**
                     * Encodes the specified Enquete message. Does not implicitly {@link dwango.nicolive.chat.data.Enquete.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @static
                     * @param {dwango.nicolive.chat.data.IEnquete} message Enquete message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Enquete.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.question != null && Object.hasOwnProperty.call(message, "question"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.question);
                        if (message.choices != null && message.choices.length)
                            for (var i = 0; i < message.choices.length; ++i)
                                $root.dwango.nicolive.chat.data.Enquete.Choice.encode(message.choices[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
                        return writer;
                    };

                    /**
                     * Encodes the specified Enquete message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Enquete.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @static
                     * @param {dwango.nicolive.chat.data.IEnquete} message Enquete message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Enquete.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Enquete message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.Enquete} Enquete
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Enquete.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Enquete();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.question = reader.string();
                                    break;
                                }
                            case 2: {
                                    if (!(message.choices && message.choices.length))
                                        message.choices = [];
                                    message.choices.push($root.dwango.nicolive.chat.data.Enquete.Choice.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.status = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Enquete message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.Enquete} Enquete
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Enquete.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Enquete message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Enquete.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.question != null && message.hasOwnProperty("question"))
                            if (!$util.isString(message.question))
                                return "question: string expected";
                        if (message.choices != null && message.hasOwnProperty("choices")) {
                            if (!Array.isArray(message.choices))
                                return "choices: array expected";
                            for (var i = 0; i < message.choices.length; ++i) {
                                var error = $root.dwango.nicolive.chat.data.Enquete.Choice.verify(message.choices[i]);
                                if (error)
                                    return "choices." + error;
                            }
                        }
                        if (message.status != null && message.hasOwnProperty("status"))
                            switch (message.status) {
                            default:
                                return "status: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates an Enquete message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.Enquete} Enquete
                     */
                    Enquete.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.Enquete)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.Enquete();
                        if (object.question != null)
                            message.question = String(object.question);
                        if (object.choices) {
                            if (!Array.isArray(object.choices))
                                throw TypeError(".dwango.nicolive.chat.data.Enquete.choices: array expected");
                            message.choices = [];
                            for (var i = 0; i < object.choices.length; ++i) {
                                if (typeof object.choices[i] !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.Enquete.choices: object expected");
                                message.choices[i] = $root.dwango.nicolive.chat.data.Enquete.Choice.fromObject(object.choices[i]);
                            }
                        }
                        switch (object.status) {
                        default:
                            if (typeof object.status === "number") {
                                message.status = object.status;
                                break;
                            }
                            break;
                        case "Closed":
                        case 0:
                            message.status = 0;
                            break;
                        case "Poll":
                        case 1:
                            message.status = 1;
                            break;
                        case "Result":
                        case 2:
                            message.status = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Enquete message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @static
                     * @param {dwango.nicolive.chat.data.Enquete} message Enquete
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Enquete.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.choices = [];
                        if (options.defaults) {
                            object.question = "";
                            object.status = options.enums === String ? "Closed" : 0;
                        }
                        if (message.question != null && message.hasOwnProperty("question"))
                            object.question = message.question;
                        if (message.choices && message.choices.length) {
                            object.choices = [];
                            for (var j = 0; j < message.choices.length; ++j)
                                object.choices[j] = $root.dwango.nicolive.chat.data.Enquete.Choice.toObject(message.choices[j], options);
                        }
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = options.enums === String ? $root.dwango.nicolive.chat.data.Enquete.Status[message.status] === undefined ? message.status : $root.dwango.nicolive.chat.data.Enquete.Status[message.status] : message.status;
                        return object;
                    };

                    /**
                     * Converts this Enquete to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Enquete.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Enquete
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.Enquete
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Enquete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.Enquete";
                    };

                    /**
                     * Status enum.
                     * @name dwango.nicolive.chat.data.Enquete.Status
                     * @enum {number}
                     * @property {number} Closed=0 Closed value
                     * @property {number} Poll=1 Poll value
                     * @property {number} Result=2 Result value
                     */
                    Enquete.Status = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Closed"] = 0;
                        values[valuesById[1] = "Poll"] = 1;
                        values[valuesById[2] = "Result"] = 2;
                        return values;
                    })();

                    Enquete.Choice = (function() {

                        /**
                         * Properties of a Choice.
                         * @memberof dwango.nicolive.chat.data.Enquete
                         * @interface IChoice
                         * @property {string|null} [description] Choice description
                         * @property {number|null} [perMille] Choice perMille
                         */

                        /**
                         * Constructs a new Choice.
                         * @memberof dwango.nicolive.chat.data.Enquete
                         * @classdesc Represents a Choice.
                         * @implements IChoice
                         * @constructor
                         * @param {dwango.nicolive.chat.data.Enquete.IChoice=} [properties] Properties to set
                         */
                        function Choice(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Choice description.
                         * @member {string} description
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @instance
                         */
                        Choice.prototype.description = "";

                        /**
                         * Choice perMille.
                         * @member {number|null|undefined} perMille
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @instance
                         */
                        Choice.prototype.perMille = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * Choice _perMille.
                         * @member {"perMille"|undefined} _perMille
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @instance
                         */
                        Object.defineProperty(Choice.prototype, "_perMille", {
                            get: $util.oneOfGetter($oneOfFields = ["perMille"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Choice instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @static
                         * @param {dwango.nicolive.chat.data.Enquete.IChoice=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.Enquete.Choice} Choice instance
                         */
                        Choice.create = function create(properties) {
                            return new Choice(properties);
                        };

                        /**
                         * Encodes the specified Choice message. Does not implicitly {@link dwango.nicolive.chat.data.Enquete.Choice.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @static
                         * @param {dwango.nicolive.chat.data.Enquete.IChoice} message Choice message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Choice.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.description);
                            if (message.perMille != null && Object.hasOwnProperty.call(message, "perMille"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.perMille);
                            return writer;
                        };

                        /**
                         * Encodes the specified Choice message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Enquete.Choice.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @static
                         * @param {dwango.nicolive.chat.data.Enquete.IChoice} message Choice message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Choice.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Choice message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.Enquete.Choice} Choice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Choice.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Enquete.Choice();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.description = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.perMille = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Choice message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.Enquete.Choice} Choice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Choice.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Choice message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Choice.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.description != null && message.hasOwnProperty("description"))
                                if (!$util.isString(message.description))
                                    return "description: string expected";
                            if (message.perMille != null && message.hasOwnProperty("perMille")) {
                                properties._perMille = 1;
                                if (!$util.isInteger(message.perMille))
                                    return "perMille: integer expected";
                            }
                            return null;
                        };

                        /**
                         * Creates a Choice message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.Enquete.Choice} Choice
                         */
                        Choice.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.Enquete.Choice)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.Enquete.Choice();
                            if (object.description != null)
                                message.description = String(object.description);
                            if (object.perMille != null)
                                message.perMille = object.perMille | 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a Choice message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @static
                         * @param {dwango.nicolive.chat.data.Enquete.Choice} message Choice
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Choice.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.description = "";
                            if (message.description != null && message.hasOwnProperty("description"))
                                object.description = message.description;
                            if (message.perMille != null && message.hasOwnProperty("perMille")) {
                                object.perMille = message.perMille;
                                if (options.oneofs)
                                    object._perMille = "perMille";
                            }
                            return object;
                        };

                        /**
                         * Converts this Choice to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Choice.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Choice
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.Enquete.Choice
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Choice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.Enquete.Choice";
                        };

                        return Choice;
                    })();

                    return Enquete;
                })();

                data.MoveOrder = (function() {

                    /**
                     * Properties of a MoveOrder.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IMoveOrder
                     * @property {dwango.nicolive.chat.data.IJump|null} [jump] MoveOrder jump
                     * @property {dwango.nicolive.chat.data.IRedirect|null} [redirect] MoveOrder redirect
                     */

                    /**
                     * Constructs a new MoveOrder.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a MoveOrder.
                     * @implements IMoveOrder
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IMoveOrder=} [properties] Properties to set
                     */
                    function MoveOrder(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MoveOrder jump.
                     * @member {dwango.nicolive.chat.data.IJump|null|undefined} jump
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @instance
                     */
                    MoveOrder.prototype.jump = null;

                    /**
                     * MoveOrder redirect.
                     * @member {dwango.nicolive.chat.data.IRedirect|null|undefined} redirect
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @instance
                     */
                    MoveOrder.prototype.redirect = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * MoveOrder to.
                     * @member {"jump"|"redirect"|undefined} to
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @instance
                     */
                    Object.defineProperty(MoveOrder.prototype, "to", {
                        get: $util.oneOfGetter($oneOfFields = ["jump", "redirect"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new MoveOrder instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @static
                     * @param {dwango.nicolive.chat.data.IMoveOrder=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.MoveOrder} MoveOrder instance
                     */
                    MoveOrder.create = function create(properties) {
                        return new MoveOrder(properties);
                    };

                    /**
                     * Encodes the specified MoveOrder message. Does not implicitly {@link dwango.nicolive.chat.data.MoveOrder.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @static
                     * @param {dwango.nicolive.chat.data.IMoveOrder} message MoveOrder message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MoveOrder.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.jump != null && Object.hasOwnProperty.call(message, "jump"))
                            $root.dwango.nicolive.chat.data.Jump.encode(message.jump, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.redirect != null && Object.hasOwnProperty.call(message, "redirect"))
                            $root.dwango.nicolive.chat.data.Redirect.encode(message.redirect, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified MoveOrder message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.MoveOrder.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @static
                     * @param {dwango.nicolive.chat.data.IMoveOrder} message MoveOrder message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MoveOrder.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MoveOrder message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.MoveOrder} MoveOrder
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MoveOrder.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.MoveOrder();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.jump = $root.dwango.nicolive.chat.data.Jump.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.redirect = $root.dwango.nicolive.chat.data.Redirect.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MoveOrder message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.MoveOrder} MoveOrder
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MoveOrder.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MoveOrder message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MoveOrder.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.jump != null && message.hasOwnProperty("jump")) {
                            properties.to = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Jump.verify(message.jump);
                                if (error)
                                    return "jump." + error;
                            }
                        }
                        if (message.redirect != null && message.hasOwnProperty("redirect")) {
                            if (properties.to === 1)
                                return "to: multiple values";
                            properties.to = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Redirect.verify(message.redirect);
                                if (error)
                                    return "redirect." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a MoveOrder message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.MoveOrder} MoveOrder
                     */
                    MoveOrder.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.MoveOrder)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.MoveOrder();
                        if (object.jump != null) {
                            if (typeof object.jump !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.MoveOrder.jump: object expected");
                            message.jump = $root.dwango.nicolive.chat.data.Jump.fromObject(object.jump);
                        }
                        if (object.redirect != null) {
                            if (typeof object.redirect !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.MoveOrder.redirect: object expected");
                            message.redirect = $root.dwango.nicolive.chat.data.Redirect.fromObject(object.redirect);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MoveOrder message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @static
                     * @param {dwango.nicolive.chat.data.MoveOrder} message MoveOrder
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MoveOrder.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.jump != null && message.hasOwnProperty("jump")) {
                            object.jump = $root.dwango.nicolive.chat.data.Jump.toObject(message.jump, options);
                            if (options.oneofs)
                                object.to = "jump";
                        }
                        if (message.redirect != null && message.hasOwnProperty("redirect")) {
                            object.redirect = $root.dwango.nicolive.chat.data.Redirect.toObject(message.redirect, options);
                            if (options.oneofs)
                                object.to = "redirect";
                        }
                        return object;
                    };

                    /**
                     * Converts this MoveOrder to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MoveOrder.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for MoveOrder
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.MoveOrder
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    MoveOrder.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.MoveOrder";
                    };

                    return MoveOrder;
                })();

                data.Jump = (function() {

                    /**
                     * Properties of a Jump.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IJump
                     * @property {string|null} [content] Jump content
                     * @property {string|null} [message] Jump message
                     * @property {google.protobuf.IDuration|null} [wait] Jump wait
                     */

                    /**
                     * Constructs a new Jump.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a Jump.
                     * @implements IJump
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IJump=} [properties] Properties to set
                     */
                    function Jump(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Jump content.
                     * @member {string} content
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @instance
                     */
                    Jump.prototype.content = "";

                    /**
                     * Jump message.
                     * @member {string} message
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @instance
                     */
                    Jump.prototype.message = "";

                    /**
                     * Jump wait.
                     * @member {google.protobuf.IDuration|null|undefined} wait
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @instance
                     */
                    Jump.prototype.wait = null;

                    /**
                     * Creates a new Jump instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @static
                     * @param {dwango.nicolive.chat.data.IJump=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.Jump} Jump instance
                     */
                    Jump.create = function create(properties) {
                        return new Jump(properties);
                    };

                    /**
                     * Encodes the specified Jump message. Does not implicitly {@link dwango.nicolive.chat.data.Jump.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @static
                     * @param {dwango.nicolive.chat.data.IJump} message Jump message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Jump.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        if (message.wait != null && Object.hasOwnProperty.call(message, "wait"))
                            $root.google.protobuf.Duration.encode(message.wait, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Jump message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Jump.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @static
                     * @param {dwango.nicolive.chat.data.IJump} message Jump message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Jump.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Jump message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.Jump} Jump
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Jump.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Jump();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.content = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.message = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.wait = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Jump message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.Jump} Jump
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Jump.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Jump message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Jump.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.content != null && message.hasOwnProperty("content"))
                            if (!$util.isString(message.content))
                                return "content: string expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (message.wait != null && message.hasOwnProperty("wait")) {
                            var error = $root.google.protobuf.Duration.verify(message.wait);
                            if (error)
                                return "wait." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Jump message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.Jump} Jump
                     */
                    Jump.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.Jump)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.Jump();
                        if (object.content != null)
                            message.content = String(object.content);
                        if (object.message != null)
                            message.message = String(object.message);
                        if (object.wait != null) {
                            if (typeof object.wait !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.Jump.wait: object expected");
                            message.wait = $root.google.protobuf.Duration.fromObject(object.wait);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Jump message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @static
                     * @param {dwango.nicolive.chat.data.Jump} message Jump
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Jump.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.content = "";
                            object.message = "";
                            object.wait = null;
                        }
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.wait != null && message.hasOwnProperty("wait"))
                            object.wait = $root.google.protobuf.Duration.toObject(message.wait, options);
                        return object;
                    };

                    /**
                     * Converts this Jump to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Jump.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Jump
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.Jump
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Jump.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.Jump";
                    };

                    return Jump;
                })();

                data.Redirect = (function() {

                    /**
                     * Properties of a Redirect.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IRedirect
                     * @property {string|null} [uri] Redirect uri
                     * @property {string|null} [message] Redirect message
                     * @property {google.protobuf.IDuration|null} [wait] Redirect wait
                     */

                    /**
                     * Constructs a new Redirect.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a Redirect.
                     * @implements IRedirect
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IRedirect=} [properties] Properties to set
                     */
                    function Redirect(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Redirect uri.
                     * @member {string} uri
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @instance
                     */
                    Redirect.prototype.uri = "";

                    /**
                     * Redirect message.
                     * @member {string} message
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @instance
                     */
                    Redirect.prototype.message = "";

                    /**
                     * Redirect wait.
                     * @member {google.protobuf.IDuration|null|undefined} wait
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @instance
                     */
                    Redirect.prototype.wait = null;

                    /**
                     * Creates a new Redirect instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @static
                     * @param {dwango.nicolive.chat.data.IRedirect=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.Redirect} Redirect instance
                     */
                    Redirect.create = function create(properties) {
                        return new Redirect(properties);
                    };

                    /**
                     * Encodes the specified Redirect message. Does not implicitly {@link dwango.nicolive.chat.data.Redirect.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @static
                     * @param {dwango.nicolive.chat.data.IRedirect} message Redirect message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Redirect.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
                        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        if (message.wait != null && Object.hasOwnProperty.call(message, "wait"))
                            $root.google.protobuf.Duration.encode(message.wait, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Redirect message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Redirect.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @static
                     * @param {dwango.nicolive.chat.data.IRedirect} message Redirect message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Redirect.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Redirect message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.Redirect} Redirect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Redirect.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Redirect();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.uri = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.message = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.wait = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Redirect message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.Redirect} Redirect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Redirect.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Redirect message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Redirect.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.uri != null && message.hasOwnProperty("uri"))
                            if (!$util.isString(message.uri))
                                return "uri: string expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (message.wait != null && message.hasOwnProperty("wait")) {
                            var error = $root.google.protobuf.Duration.verify(message.wait);
                            if (error)
                                return "wait." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Redirect message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.Redirect} Redirect
                     */
                    Redirect.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.Redirect)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.Redirect();
                        if (object.uri != null)
                            message.uri = String(object.uri);
                        if (object.message != null)
                            message.message = String(object.message);
                        if (object.wait != null) {
                            if (typeof object.wait !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.Redirect.wait: object expected");
                            message.wait = $root.google.protobuf.Duration.fromObject(object.wait);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Redirect message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @static
                     * @param {dwango.nicolive.chat.data.Redirect} message Redirect
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Redirect.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.uri = "";
                            object.message = "";
                            object.wait = null;
                        }
                        if (message.uri != null && message.hasOwnProperty("uri"))
                            object.uri = message.uri;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.wait != null && message.hasOwnProperty("wait"))
                            object.wait = $root.google.protobuf.Duration.toObject(message.wait, options);
                        return object;
                    };

                    /**
                     * Converts this Redirect to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Redirect.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Redirect
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.Redirect
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Redirect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.Redirect";
                    };

                    return Redirect;
                })();

                data.Marque = (function() {

                    /**
                     * Properties of a Marque.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IMarque
                     * @property {dwango.nicolive.chat.data.Marque.IDisplay|null} [display] Marque display
                     */

                    /**
                     * Constructs a new Marque.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a Marque.
                     * @implements IMarque
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IMarque=} [properties] Properties to set
                     */
                    function Marque(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Marque display.
                     * @member {dwango.nicolive.chat.data.Marque.IDisplay|null|undefined} display
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @instance
                     */
                    Marque.prototype.display = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Marque _display.
                     * @member {"display"|undefined} _display
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @instance
                     */
                    Object.defineProperty(Marque.prototype, "_display", {
                        get: $util.oneOfGetter($oneOfFields = ["display"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Marque instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @static
                     * @param {dwango.nicolive.chat.data.IMarque=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.Marque} Marque instance
                     */
                    Marque.create = function create(properties) {
                        return new Marque(properties);
                    };

                    /**
                     * Encodes the specified Marque message. Does not implicitly {@link dwango.nicolive.chat.data.Marque.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @static
                     * @param {dwango.nicolive.chat.data.IMarque} message Marque message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Marque.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.display != null && Object.hasOwnProperty.call(message, "display"))
                            $root.dwango.nicolive.chat.data.Marque.Display.encode(message.display, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Marque message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Marque.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @static
                     * @param {dwango.nicolive.chat.data.IMarque} message Marque message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Marque.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Marque message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.Marque} Marque
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Marque.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Marque();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.display = $root.dwango.nicolive.chat.data.Marque.Display.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Marque message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.Marque} Marque
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Marque.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Marque message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Marque.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.display != null && message.hasOwnProperty("display")) {
                            properties._display = 1;
                            {
                                var error = $root.dwango.nicolive.chat.data.Marque.Display.verify(message.display);
                                if (error)
                                    return "display." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Marque message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.Marque} Marque
                     */
                    Marque.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.Marque)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.Marque();
                        if (object.display != null) {
                            if (typeof object.display !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.Marque.display: object expected");
                            message.display = $root.dwango.nicolive.chat.data.Marque.Display.fromObject(object.display);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Marque message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @static
                     * @param {dwango.nicolive.chat.data.Marque} message Marque
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Marque.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.display != null && message.hasOwnProperty("display")) {
                            object.display = $root.dwango.nicolive.chat.data.Marque.Display.toObject(message.display, options);
                            if (options.oneofs)
                                object._display = "display";
                        }
                        return object;
                    };

                    /**
                     * Converts this Marque to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Marque.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Marque
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.Marque
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Marque.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.Marque";
                    };

                    Marque.Display = (function() {

                        /**
                         * Properties of a Display.
                         * @memberof dwango.nicolive.chat.data.Marque
                         * @interface IDisplay
                         * @property {dwango.nicolive.chat.data.IOperatorComment|null} [operatorComment] Display operatorComment
                         * @property {google.protobuf.IDuration|null} [duration] Display duration
                         */

                        /**
                         * Constructs a new Display.
                         * @memberof dwango.nicolive.chat.data.Marque
                         * @classdesc Represents a Display.
                         * @implements IDisplay
                         * @constructor
                         * @param {dwango.nicolive.chat.data.Marque.IDisplay=} [properties] Properties to set
                         */
                        function Display(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Display operatorComment.
                         * @member {dwango.nicolive.chat.data.IOperatorComment|null|undefined} operatorComment
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @instance
                         */
                        Display.prototype.operatorComment = null;

                        /**
                         * Display duration.
                         * @member {google.protobuf.IDuration|null|undefined} duration
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @instance
                         */
                        Display.prototype.duration = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * Display _duration.
                         * @member {"duration"|undefined} _duration
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @instance
                         */
                        Object.defineProperty(Display.prototype, "_duration", {
                            get: $util.oneOfGetter($oneOfFields = ["duration"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Display instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @static
                         * @param {dwango.nicolive.chat.data.Marque.IDisplay=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.Marque.Display} Display instance
                         */
                        Display.create = function create(properties) {
                            return new Display(properties);
                        };

                        /**
                         * Encodes the specified Display message. Does not implicitly {@link dwango.nicolive.chat.data.Marque.Display.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @static
                         * @param {dwango.nicolive.chat.data.Marque.IDisplay} message Display message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Display.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.operatorComment != null && Object.hasOwnProperty.call(message, "operatorComment"))
                                $root.dwango.nicolive.chat.data.OperatorComment.encode(message.operatorComment, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                                $root.google.protobuf.Duration.encode(message.duration, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified Display message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Marque.Display.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @static
                         * @param {dwango.nicolive.chat.data.Marque.IDisplay} message Display message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Display.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Display message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.Marque.Display} Display
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Display.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.Marque.Display();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.operatorComment = $root.dwango.nicolive.chat.data.OperatorComment.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.duration = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Display message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.Marque.Display} Display
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Display.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Display message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Display.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.operatorComment != null && message.hasOwnProperty("operatorComment")) {
                                var error = $root.dwango.nicolive.chat.data.OperatorComment.verify(message.operatorComment);
                                if (error)
                                    return "operatorComment." + error;
                            }
                            if (message.duration != null && message.hasOwnProperty("duration")) {
                                properties._duration = 1;
                                {
                                    var error = $root.google.protobuf.Duration.verify(message.duration);
                                    if (error)
                                        return "duration." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a Display message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.Marque.Display} Display
                         */
                        Display.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.Marque.Display)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.Marque.Display();
                            if (object.operatorComment != null) {
                                if (typeof object.operatorComment !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.Marque.Display.operatorComment: object expected");
                                message.operatorComment = $root.dwango.nicolive.chat.data.OperatorComment.fromObject(object.operatorComment);
                            }
                            if (object.duration != null) {
                                if (typeof object.duration !== "object")
                                    throw TypeError(".dwango.nicolive.chat.data.Marque.Display.duration: object expected");
                                message.duration = $root.google.protobuf.Duration.fromObject(object.duration);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Display message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @static
                         * @param {dwango.nicolive.chat.data.Marque.Display} message Display
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Display.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.operatorComment = null;
                            if (message.operatorComment != null && message.hasOwnProperty("operatorComment"))
                                object.operatorComment = $root.dwango.nicolive.chat.data.OperatorComment.toObject(message.operatorComment, options);
                            if (message.duration != null && message.hasOwnProperty("duration")) {
                                object.duration = $root.google.protobuf.Duration.toObject(message.duration, options);
                                if (options.oneofs)
                                    object._duration = "duration";
                            }
                            return object;
                        };

                        /**
                         * Converts this Display to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Display.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Display
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.Marque.Display
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Display.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.Marque.Display";
                        };

                        return Display;
                    })();

                    return Marque;
                })();

                data.OperatorComment = (function() {

                    /**
                     * Properties of an OperatorComment.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IOperatorComment
                     * @property {string|null} [content] OperatorComment content
                     * @property {string|null} [name] OperatorComment name
                     * @property {dwango.nicolive.chat.data.Chat.IModifier|null} [modifier] OperatorComment modifier
                     * @property {string|null} [link] OperatorComment link
                     */

                    /**
                     * Constructs a new OperatorComment.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents an OperatorComment.
                     * @implements IOperatorComment
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IOperatorComment=} [properties] Properties to set
                     */
                    function OperatorComment(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * OperatorComment content.
                     * @member {string} content
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @instance
                     */
                    OperatorComment.prototype.content = "";

                    /**
                     * OperatorComment name.
                     * @member {string|null|undefined} name
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @instance
                     */
                    OperatorComment.prototype.name = null;

                    /**
                     * OperatorComment modifier.
                     * @member {dwango.nicolive.chat.data.Chat.IModifier|null|undefined} modifier
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @instance
                     */
                    OperatorComment.prototype.modifier = null;

                    /**
                     * OperatorComment link.
                     * @member {string|null|undefined} link
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @instance
                     */
                    OperatorComment.prototype.link = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * OperatorComment _name.
                     * @member {"name"|undefined} _name
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @instance
                     */
                    Object.defineProperty(OperatorComment.prototype, "_name", {
                        get: $util.oneOfGetter($oneOfFields = ["name"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * OperatorComment _link.
                     * @member {"link"|undefined} _link
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @instance
                     */
                    Object.defineProperty(OperatorComment.prototype, "_link", {
                        get: $util.oneOfGetter($oneOfFields = ["link"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new OperatorComment instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @static
                     * @param {dwango.nicolive.chat.data.IOperatorComment=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.OperatorComment} OperatorComment instance
                     */
                    OperatorComment.create = function create(properties) {
                        return new OperatorComment(properties);
                    };

                    /**
                     * Encodes the specified OperatorComment message. Does not implicitly {@link dwango.nicolive.chat.data.OperatorComment.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @static
                     * @param {dwango.nicolive.chat.data.IOperatorComment} message OperatorComment message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperatorComment.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.modifier != null && Object.hasOwnProperty.call(message, "modifier"))
                            $root.dwango.nicolive.chat.data.Chat.Modifier.encode(message.modifier, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.link != null && Object.hasOwnProperty.call(message, "link"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.link);
                        return writer;
                    };

                    /**
                     * Encodes the specified OperatorComment message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.OperatorComment.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @static
                     * @param {dwango.nicolive.chat.data.IOperatorComment} message OperatorComment message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperatorComment.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an OperatorComment message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.OperatorComment} OperatorComment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperatorComment.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.OperatorComment();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.content = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.name = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.modifier = $root.dwango.nicolive.chat.data.Chat.Modifier.decode(reader, reader.uint32());
                                    break;
                                }
                            case 4: {
                                    message.link = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an OperatorComment message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.OperatorComment} OperatorComment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperatorComment.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an OperatorComment message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    OperatorComment.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.content != null && message.hasOwnProperty("content"))
                            if (!$util.isString(message.content))
                                return "content: string expected";
                        if (message.name != null && message.hasOwnProperty("name")) {
                            properties._name = 1;
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        }
                        if (message.modifier != null && message.hasOwnProperty("modifier")) {
                            var error = $root.dwango.nicolive.chat.data.Chat.Modifier.verify(message.modifier);
                            if (error)
                                return "modifier." + error;
                        }
                        if (message.link != null && message.hasOwnProperty("link")) {
                            properties._link = 1;
                            if (!$util.isString(message.link))
                                return "link: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an OperatorComment message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.OperatorComment} OperatorComment
                     */
                    OperatorComment.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.OperatorComment)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.OperatorComment();
                        if (object.content != null)
                            message.content = String(object.content);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.modifier != null) {
                            if (typeof object.modifier !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.OperatorComment.modifier: object expected");
                            message.modifier = $root.dwango.nicolive.chat.data.Chat.Modifier.fromObject(object.modifier);
                        }
                        if (object.link != null)
                            message.link = String(object.link);
                        return message;
                    };

                    /**
                     * Creates a plain object from an OperatorComment message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @static
                     * @param {dwango.nicolive.chat.data.OperatorComment} message OperatorComment
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OperatorComment.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.content = "";
                            object.modifier = null;
                        }
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        if (message.name != null && message.hasOwnProperty("name")) {
                            object.name = message.name;
                            if (options.oneofs)
                                object._name = "name";
                        }
                        if (message.modifier != null && message.hasOwnProperty("modifier"))
                            object.modifier = $root.dwango.nicolive.chat.data.Chat.Modifier.toObject(message.modifier, options);
                        if (message.link != null && message.hasOwnProperty("link")) {
                            object.link = message.link;
                            if (options.oneofs)
                                object._link = "link";
                        }
                        return object;
                    };

                    /**
                     * Converts this OperatorComment to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OperatorComment.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for OperatorComment
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.OperatorComment
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    OperatorComment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.OperatorComment";
                    };

                    return OperatorComment;
                })();

                data.CommentLock = (function() {

                    /**
                     * Properties of a CommentLock.
                     * @memberof dwango.nicolive.chat.data
                     * @interface ICommentLock
                     * @property {dwango.nicolive.chat.data.CommentLock.Status|null} [status] CommentLock status
                     */

                    /**
                     * Constructs a new CommentLock.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a CommentLock.
                     * @implements ICommentLock
                     * @constructor
                     * @param {dwango.nicolive.chat.data.ICommentLock=} [properties] Properties to set
                     */
                    function CommentLock(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommentLock status.
                     * @member {dwango.nicolive.chat.data.CommentLock.Status} status
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @instance
                     */
                    CommentLock.prototype.status = 0;

                    /**
                     * Creates a new CommentLock instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @static
                     * @param {dwango.nicolive.chat.data.ICommentLock=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.CommentLock} CommentLock instance
                     */
                    CommentLock.create = function create(properties) {
                        return new CommentLock(properties);
                    };

                    /**
                     * Encodes the specified CommentLock message. Does not implicitly {@link dwango.nicolive.chat.data.CommentLock.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @static
                     * @param {dwango.nicolive.chat.data.ICommentLock} message CommentLock message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommentLock.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommentLock message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.CommentLock.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @static
                     * @param {dwango.nicolive.chat.data.ICommentLock} message CommentLock message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommentLock.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommentLock message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.CommentLock} CommentLock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommentLock.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.CommentLock();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.status = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CommentLock message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.CommentLock} CommentLock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommentLock.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommentLock message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommentLock.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.status != null && message.hasOwnProperty("status"))
                            switch (message.status) {
                            default:
                                return "status: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a CommentLock message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.CommentLock} CommentLock
                     */
                    CommentLock.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.CommentLock)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.CommentLock();
                        switch (object.status) {
                        default:
                            if (typeof object.status === "number") {
                                message.status = object.status;
                                break;
                            }
                            break;
                        case "Unretricted":
                        case 0:
                            message.status = 0;
                            break;
                        case "Locked":
                        case 1:
                            message.status = 1;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommentLock message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @static
                     * @param {dwango.nicolive.chat.data.CommentLock} message CommentLock
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommentLock.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.status = options.enums === String ? "Unretricted" : 0;
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = options.enums === String ? $root.dwango.nicolive.chat.data.CommentLock.Status[message.status] === undefined ? message.status : $root.dwango.nicolive.chat.data.CommentLock.Status[message.status] : message.status;
                        return object;
                    };

                    /**
                     * Converts this CommentLock to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommentLock.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommentLock
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.CommentLock
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommentLock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.CommentLock";
                    };

                    /**
                     * Status enum.
                     * @name dwango.nicolive.chat.data.CommentLock.Status
                     * @enum {number}
                     * @property {number} Unretricted=0 Unretricted value
                     * @property {number} Locked=1 Locked value
                     */
                    CommentLock.Status = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Unretricted"] = 0;
                        values[valuesById[1] = "Locked"] = 1;
                        return values;
                    })();

                    return CommentLock;
                })();

                data.CommentMode = (function() {

                    /**
                     * Properties of a CommentMode.
                     * @memberof dwango.nicolive.chat.data
                     * @interface ICommentMode
                     * @property {dwango.nicolive.chat.data.CommentMode.Layout|null} [layout] CommentMode layout
                     */

                    /**
                     * Constructs a new CommentMode.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a CommentMode.
                     * @implements ICommentMode
                     * @constructor
                     * @param {dwango.nicolive.chat.data.ICommentMode=} [properties] Properties to set
                     */
                    function CommentMode(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommentMode layout.
                     * @member {dwango.nicolive.chat.data.CommentMode.Layout} layout
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @instance
                     */
                    CommentMode.prototype.layout = 0;

                    /**
                     * Creates a new CommentMode instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @static
                     * @param {dwango.nicolive.chat.data.ICommentMode=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.CommentMode} CommentMode instance
                     */
                    CommentMode.create = function create(properties) {
                        return new CommentMode(properties);
                    };

                    /**
                     * Encodes the specified CommentMode message. Does not implicitly {@link dwango.nicolive.chat.data.CommentMode.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @static
                     * @param {dwango.nicolive.chat.data.ICommentMode} message CommentMode message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommentMode.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.layout != null && Object.hasOwnProperty.call(message, "layout"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.layout);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommentMode message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.CommentMode.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @static
                     * @param {dwango.nicolive.chat.data.ICommentMode} message CommentMode message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommentMode.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommentMode message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.CommentMode} CommentMode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommentMode.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.CommentMode();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.layout = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CommentMode message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.CommentMode} CommentMode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommentMode.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommentMode message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommentMode.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.layout != null && message.hasOwnProperty("layout"))
                            switch (message.layout) {
                            default:
                                return "layout: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a CommentMode message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.CommentMode} CommentMode
                     */
                    CommentMode.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.CommentMode)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.CommentMode();
                        switch (object.layout) {
                        default:
                            if (typeof object.layout === "number") {
                                message.layout = object.layout;
                                break;
                            }
                            break;
                        case "Normal":
                        case 0:
                            message.layout = 0;
                            break;
                        case "SplitTop":
                        case 1:
                            message.layout = 1;
                            break;
                        case "Background":
                        case 2:
                            message.layout = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommentMode message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @static
                     * @param {dwango.nicolive.chat.data.CommentMode} message CommentMode
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommentMode.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.layout = options.enums === String ? "Normal" : 0;
                        if (message.layout != null && message.hasOwnProperty("layout"))
                            object.layout = options.enums === String ? $root.dwango.nicolive.chat.data.CommentMode.Layout[message.layout] === undefined ? message.layout : $root.dwango.nicolive.chat.data.CommentMode.Layout[message.layout] : message.layout;
                        return object;
                    };

                    /**
                     * Converts this CommentMode to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommentMode.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommentMode
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.CommentMode
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommentMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.CommentMode";
                    };

                    /**
                     * Layout enum.
                     * @name dwango.nicolive.chat.data.CommentMode.Layout
                     * @enum {number}
                     * @property {number} Normal=0 Normal value
                     * @property {number} SplitTop=1 SplitTop value
                     * @property {number} Background=2 Background value
                     */
                    CommentMode.Layout = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Normal"] = 0;
                        values[valuesById[1] = "SplitTop"] = 1;
                        values[valuesById[2] = "Background"] = 2;
                        return values;
                    })();

                    return CommentMode;
                })();

                data.TrialPanel = (function() {

                    /**
                     * Properties of a TrialPanel.
                     * @memberof dwango.nicolive.chat.data
                     * @interface ITrialPanel
                     * @property {dwango.nicolive.chat.data.TrialPanel.Panel|null} [panel] TrialPanel panel
                     * @property {dwango.nicolive.chat.data.TrialPanel.Mode|null} [unqualifiedUser] TrialPanel unqualifiedUser
                     */

                    /**
                     * Constructs a new TrialPanel.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a TrialPanel.
                     * @implements ITrialPanel
                     * @constructor
                     * @param {dwango.nicolive.chat.data.ITrialPanel=} [properties] Properties to set
                     */
                    function TrialPanel(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TrialPanel panel.
                     * @member {dwango.nicolive.chat.data.TrialPanel.Panel} panel
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @instance
                     */
                    TrialPanel.prototype.panel = 0;

                    /**
                     * TrialPanel unqualifiedUser.
                     * @member {dwango.nicolive.chat.data.TrialPanel.Mode} unqualifiedUser
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @instance
                     */
                    TrialPanel.prototype.unqualifiedUser = 0;

                    /**
                     * Creates a new TrialPanel instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @static
                     * @param {dwango.nicolive.chat.data.ITrialPanel=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.TrialPanel} TrialPanel instance
                     */
                    TrialPanel.create = function create(properties) {
                        return new TrialPanel(properties);
                    };

                    /**
                     * Encodes the specified TrialPanel message. Does not implicitly {@link dwango.nicolive.chat.data.TrialPanel.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @static
                     * @param {dwango.nicolive.chat.data.ITrialPanel} message TrialPanel message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TrialPanel.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.panel != null && Object.hasOwnProperty.call(message, "panel"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.panel);
                        if (message.unqualifiedUser != null && Object.hasOwnProperty.call(message, "unqualifiedUser"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unqualifiedUser);
                        return writer;
                    };

                    /**
                     * Encodes the specified TrialPanel message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.TrialPanel.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @static
                     * @param {dwango.nicolive.chat.data.ITrialPanel} message TrialPanel message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TrialPanel.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TrialPanel message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.TrialPanel} TrialPanel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TrialPanel.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.TrialPanel();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.panel = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.unqualifiedUser = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TrialPanel message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.TrialPanel} TrialPanel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TrialPanel.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TrialPanel message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TrialPanel.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.panel != null && message.hasOwnProperty("panel"))
                            switch (message.panel) {
                            default:
                                return "panel: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.unqualifiedUser != null && message.hasOwnProperty("unqualifiedUser"))
                            switch (message.unqualifiedUser) {
                            default:
                                return "unqualifiedUser: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a TrialPanel message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.TrialPanel} TrialPanel
                     */
                    TrialPanel.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.TrialPanel)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.TrialPanel();
                        switch (object.panel) {
                        default:
                            if (typeof object.panel === "number") {
                                message.panel = object.panel;
                                break;
                            }
                            break;
                        case "Hidden":
                        case 0:
                            message.panel = 0;
                            break;
                        case "Display":
                        case 1:
                            message.panel = 1;
                            break;
                        }
                        switch (object.unqualifiedUser) {
                        default:
                            if (typeof object.unqualifiedUser === "number") {
                                message.unqualifiedUser = object.unqualifiedUser;
                                break;
                            }
                            break;
                        case "Allowed":
                        case 0:
                            message.unqualifiedUser = 0;
                            break;
                        case "Restricted":
                        case 1:
                            message.unqualifiedUser = 1;
                            break;
                        case "Forbidden":
                        case 2:
                            message.unqualifiedUser = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TrialPanel message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @static
                     * @param {dwango.nicolive.chat.data.TrialPanel} message TrialPanel
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TrialPanel.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.panel = options.enums === String ? "Hidden" : 0;
                            object.unqualifiedUser = options.enums === String ? "Allowed" : 0;
                        }
                        if (message.panel != null && message.hasOwnProperty("panel"))
                            object.panel = options.enums === String ? $root.dwango.nicolive.chat.data.TrialPanel.Panel[message.panel] === undefined ? message.panel : $root.dwango.nicolive.chat.data.TrialPanel.Panel[message.panel] : message.panel;
                        if (message.unqualifiedUser != null && message.hasOwnProperty("unqualifiedUser"))
                            object.unqualifiedUser = options.enums === String ? $root.dwango.nicolive.chat.data.TrialPanel.Mode[message.unqualifiedUser] === undefined ? message.unqualifiedUser : $root.dwango.nicolive.chat.data.TrialPanel.Mode[message.unqualifiedUser] : message.unqualifiedUser;
                        return object;
                    };

                    /**
                     * Converts this TrialPanel to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TrialPanel.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for TrialPanel
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.TrialPanel
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    TrialPanel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.TrialPanel";
                    };

                    /**
                     * Panel enum.
                     * @name dwango.nicolive.chat.data.TrialPanel.Panel
                     * @enum {number}
                     * @property {number} Hidden=0 Hidden value
                     * @property {number} Display=1 Display value
                     */
                    TrialPanel.Panel = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Hidden"] = 0;
                        values[valuesById[1] = "Display"] = 1;
                        return values;
                    })();

                    /**
                     * Mode enum.
                     * @name dwango.nicolive.chat.data.TrialPanel.Mode
                     * @enum {number}
                     * @property {number} Allowed=0 Allowed value
                     * @property {number} Restricted=1 Restricted value
                     * @property {number} Forbidden=2 Forbidden value
                     */
                    TrialPanel.Mode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Allowed"] = 0;
                        values[valuesById[1] = "Restricted"] = 1;
                        values[valuesById[2] = "Forbidden"] = 2;
                        return values;
                    })();

                    return TrialPanel;
                })();

                data.FingerPrint = (function() {

                    /**
                     * Properties of a FingerPrint.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IFingerPrint
                     * @property {dwango.nicolive.chat.data.FingerPrint.Position|null} [position] FingerPrint position
                     * @property {dwango.nicolive.chat.data.FingerPrint.Size|null} [size] FingerPrint size
                     * @property {google.protobuf.IDuration|null} [duration] FingerPrint duration
                     */

                    /**
                     * Constructs a new FingerPrint.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a FingerPrint.
                     * @implements IFingerPrint
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IFingerPrint=} [properties] Properties to set
                     */
                    function FingerPrint(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FingerPrint position.
                     * @member {dwango.nicolive.chat.data.FingerPrint.Position} position
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @instance
                     */
                    FingerPrint.prototype.position = 0;

                    /**
                     * FingerPrint size.
                     * @member {dwango.nicolive.chat.data.FingerPrint.Size} size
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @instance
                     */
                    FingerPrint.prototype.size = 0;

                    /**
                     * FingerPrint duration.
                     * @member {google.protobuf.IDuration|null|undefined} duration
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @instance
                     */
                    FingerPrint.prototype.duration = null;

                    /**
                     * Creates a new FingerPrint instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @static
                     * @param {dwango.nicolive.chat.data.IFingerPrint=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.FingerPrint} FingerPrint instance
                     */
                    FingerPrint.create = function create(properties) {
                        return new FingerPrint(properties);
                    };

                    /**
                     * Encodes the specified FingerPrint message. Does not implicitly {@link dwango.nicolive.chat.data.FingerPrint.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @static
                     * @param {dwango.nicolive.chat.data.IFingerPrint} message FingerPrint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FingerPrint.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.position);
                        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.size);
                        if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                            $root.google.protobuf.Duration.encode(message.duration, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified FingerPrint message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.FingerPrint.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @static
                     * @param {dwango.nicolive.chat.data.IFingerPrint} message FingerPrint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FingerPrint.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FingerPrint message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.FingerPrint} FingerPrint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FingerPrint.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.FingerPrint();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.position = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.size = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.duration = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FingerPrint message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.FingerPrint} FingerPrint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FingerPrint.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FingerPrint message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FingerPrint.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.position != null && message.hasOwnProperty("position"))
                            switch (message.position) {
                            default:
                                return "position: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                                break;
                            }
                        if (message.size != null && message.hasOwnProperty("size"))
                            switch (message.size) {
                            default:
                                return "size: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.duration != null && message.hasOwnProperty("duration")) {
                            var error = $root.google.protobuf.Duration.verify(message.duration);
                            if (error)
                                return "duration." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a FingerPrint message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.FingerPrint} FingerPrint
                     */
                    FingerPrint.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.FingerPrint)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.FingerPrint();
                        switch (object.position) {
                        default:
                            if (typeof object.position === "number") {
                                message.position = object.position;
                                break;
                            }
                            break;
                        case "off":
                        case 0:
                            message.position = 0;
                            break;
                        case "hidarishita":
                        case 1:
                            message.position = 1;
                            break;
                        case "shita":
                        case 2:
                            message.position = 2;
                            break;
                        case "migishita":
                        case 3:
                            message.position = 3;
                            break;
                        case "hidari":
                        case 4:
                            message.position = 4;
                            break;
                        case "naka":
                        case 5:
                            message.position = 5;
                            break;
                        case "migi":
                        case 6:
                            message.position = 6;
                            break;
                        case "hidariue":
                        case 7:
                            message.position = 7;
                            break;
                        case "ue":
                        case 8:
                            message.position = 8;
                            break;
                        case "migiue":
                        case 9:
                            message.position = 9;
                            break;
                        }
                        switch (object.size) {
                        default:
                            if (typeof object.size === "number") {
                                message.size = object.size;
                                break;
                            }
                            break;
                        case "small":
                        case 0:
                            message.size = 0;
                            break;
                        case "middle":
                        case 1:
                            message.size = 1;
                            break;
                        case "big":
                        case 2:
                            message.size = 2;
                            break;
                        }
                        if (object.duration != null) {
                            if (typeof object.duration !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.FingerPrint.duration: object expected");
                            message.duration = $root.google.protobuf.Duration.fromObject(object.duration);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a FingerPrint message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @static
                     * @param {dwango.nicolive.chat.data.FingerPrint} message FingerPrint
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FingerPrint.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.position = options.enums === String ? "off" : 0;
                            object.size = options.enums === String ? "small" : 0;
                            object.duration = null;
                        }
                        if (message.position != null && message.hasOwnProperty("position"))
                            object.position = options.enums === String ? $root.dwango.nicolive.chat.data.FingerPrint.Position[message.position] === undefined ? message.position : $root.dwango.nicolive.chat.data.FingerPrint.Position[message.position] : message.position;
                        if (message.size != null && message.hasOwnProperty("size"))
                            object.size = options.enums === String ? $root.dwango.nicolive.chat.data.FingerPrint.Size[message.size] === undefined ? message.size : $root.dwango.nicolive.chat.data.FingerPrint.Size[message.size] : message.size;
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            object.duration = $root.google.protobuf.Duration.toObject(message.duration, options);
                        return object;
                    };

                    /**
                     * Converts this FingerPrint to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FingerPrint.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for FingerPrint
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.FingerPrint
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    FingerPrint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.FingerPrint";
                    };

                    /**
                     * Position enum.
                     * @name dwango.nicolive.chat.data.FingerPrint.Position
                     * @enum {number}
                     * @property {number} off=0 off value
                     * @property {number} hidarishita=1 hidarishita value
                     * @property {number} shita=2 shita value
                     * @property {number} migishita=3 migishita value
                     * @property {number} hidari=4 hidari value
                     * @property {number} naka=5 naka value
                     * @property {number} migi=6 migi value
                     * @property {number} hidariue=7 hidariue value
                     * @property {number} ue=8 ue value
                     * @property {number} migiue=9 migiue value
                     */
                    FingerPrint.Position = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "off"] = 0;
                        values[valuesById[1] = "hidarishita"] = 1;
                        values[valuesById[2] = "shita"] = 2;
                        values[valuesById[3] = "migishita"] = 3;
                        values[valuesById[4] = "hidari"] = 4;
                        values[valuesById[5] = "naka"] = 5;
                        values[valuesById[6] = "migi"] = 6;
                        values[valuesById[7] = "hidariue"] = 7;
                        values[valuesById[8] = "ue"] = 8;
                        values[valuesById[9] = "migiue"] = 9;
                        return values;
                    })();

                    /**
                     * Size enum.
                     * @name dwango.nicolive.chat.data.FingerPrint.Size
                     * @enum {number}
                     * @property {number} small=0 small value
                     * @property {number} middle=1 middle value
                     * @property {number} big=2 big value
                     */
                    FingerPrint.Size = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "small"] = 0;
                        values[valuesById[1] = "middle"] = 1;
                        values[valuesById[2] = "big"] = 2;
                        return values;
                    })();

                    return FingerPrint;
                })();

                data.ProgramStatus = (function() {

                    /**
                     * Properties of a ProgramStatus.
                     * @memberof dwango.nicolive.chat.data
                     * @interface IProgramStatus
                     * @property {dwango.nicolive.chat.data.ProgramStatus.State|null} [state] ProgramStatus state
                     */

                    /**
                     * Constructs a new ProgramStatus.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a ProgramStatus.
                     * @implements IProgramStatus
                     * @constructor
                     * @param {dwango.nicolive.chat.data.IProgramStatus=} [properties] Properties to set
                     */
                    function ProgramStatus(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ProgramStatus state.
                     * @member {dwango.nicolive.chat.data.ProgramStatus.State} state
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @instance
                     */
                    ProgramStatus.prototype.state = 0;

                    /**
                     * Creates a new ProgramStatus instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @static
                     * @param {dwango.nicolive.chat.data.IProgramStatus=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.ProgramStatus} ProgramStatus instance
                     */
                    ProgramStatus.create = function create(properties) {
                        return new ProgramStatus(properties);
                    };

                    /**
                     * Encodes the specified ProgramStatus message. Does not implicitly {@link dwango.nicolive.chat.data.ProgramStatus.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @static
                     * @param {dwango.nicolive.chat.data.IProgramStatus} message ProgramStatus message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ProgramStatus.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                        return writer;
                    };

                    /**
                     * Encodes the specified ProgramStatus message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.ProgramStatus.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @static
                     * @param {dwango.nicolive.chat.data.IProgramStatus} message ProgramStatus message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ProgramStatus.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ProgramStatus message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.ProgramStatus} ProgramStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ProgramStatus.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.ProgramStatus();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.state = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ProgramStatus message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.ProgramStatus} ProgramStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ProgramStatus.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ProgramStatus message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ProgramStatus.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.state != null && message.hasOwnProperty("state"))
                            switch (message.state) {
                            default:
                                return "state: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a ProgramStatus message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.ProgramStatus} ProgramStatus
                     */
                    ProgramStatus.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.ProgramStatus)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.ProgramStatus();
                        switch (object.state) {
                        default:
                            if (typeof object.state === "number") {
                                message.state = object.state;
                                break;
                            }
                            break;
                        case "Unknown":
                        case 0:
                            message.state = 0;
                            break;
                        case "Ended":
                        case 1:
                            message.state = 1;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ProgramStatus message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @static
                     * @param {dwango.nicolive.chat.data.ProgramStatus} message ProgramStatus
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ProgramStatus.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.state = options.enums === String ? "Unknown" : 0;
                        if (message.state != null && message.hasOwnProperty("state"))
                            object.state = options.enums === String ? $root.dwango.nicolive.chat.data.ProgramStatus.State[message.state] === undefined ? message.state : $root.dwango.nicolive.chat.data.ProgramStatus.State[message.state] : message.state;
                        return object;
                    };

                    /**
                     * Converts this ProgramStatus to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ProgramStatus.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ProgramStatus
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.ProgramStatus
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ProgramStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.ProgramStatus";
                    };

                    /**
                     * State enum.
                     * @name dwango.nicolive.chat.data.ProgramStatus.State
                     * @enum {number}
                     * @property {number} Unknown=0 Unknown value
                     * @property {number} Ended=1 Ended value
                     */
                    ProgramStatus.State = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Unknown"] = 0;
                        values[valuesById[1] = "Ended"] = 1;
                        return values;
                    })();

                    return ProgramStatus;
                })();

                data.NicoliveOrigin = (function() {

                    /**
                     * Properties of a NicoliveOrigin.
                     * @memberof dwango.nicolive.chat.data
                     * @interface INicoliveOrigin
                     * @property {dwango.nicolive.chat.data.NicoliveOrigin.IChat|null} [chat] NicoliveOrigin chat
                     */

                    /**
                     * Constructs a new NicoliveOrigin.
                     * @memberof dwango.nicolive.chat.data
                     * @classdesc Represents a NicoliveOrigin.
                     * @implements INicoliveOrigin
                     * @constructor
                     * @param {dwango.nicolive.chat.data.INicoliveOrigin=} [properties] Properties to set
                     */
                    function NicoliveOrigin(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * NicoliveOrigin chat.
                     * @member {dwango.nicolive.chat.data.NicoliveOrigin.IChat|null|undefined} chat
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @instance
                     */
                    NicoliveOrigin.prototype.chat = null;

                    /**
                     * Creates a new NicoliveOrigin instance using the specified properties.
                     * @function create
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoliveOrigin=} [properties] Properties to set
                     * @returns {dwango.nicolive.chat.data.NicoliveOrigin} NicoliveOrigin instance
                     */
                    NicoliveOrigin.create = function create(properties) {
                        return new NicoliveOrigin(properties);
                    };

                    /**
                     * Encodes the specified NicoliveOrigin message. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveOrigin.verify|verify} messages.
                     * @function encode
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoliveOrigin} message NicoliveOrigin message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NicoliveOrigin.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.chat != null && Object.hasOwnProperty.call(message, "chat"))
                            $root.dwango.nicolive.chat.data.NicoliveOrigin.Chat.encode(message.chat, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified NicoliveOrigin message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveOrigin.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @static
                     * @param {dwango.nicolive.chat.data.INicoliveOrigin} message NicoliveOrigin message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NicoliveOrigin.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a NicoliveOrigin message from the specified reader or buffer.
                     * @function decode
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dwango.nicolive.chat.data.NicoliveOrigin} NicoliveOrigin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NicoliveOrigin.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.NicoliveOrigin();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.chat = $root.dwango.nicolive.chat.data.NicoliveOrigin.Chat.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a NicoliveOrigin message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dwango.nicolive.chat.data.NicoliveOrigin} NicoliveOrigin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NicoliveOrigin.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NicoliveOrigin message.
                     * @function verify
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NicoliveOrigin.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.chat != null && message.hasOwnProperty("chat")) {
                            var error = $root.dwango.nicolive.chat.data.NicoliveOrigin.Chat.verify(message.chat);
                            if (error)
                                return "chat." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a NicoliveOrigin message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dwango.nicolive.chat.data.NicoliveOrigin} NicoliveOrigin
                     */
                    NicoliveOrigin.fromObject = function fromObject(object) {
                        if (object instanceof $root.dwango.nicolive.chat.data.NicoliveOrigin)
                            return object;
                        var message = new $root.dwango.nicolive.chat.data.NicoliveOrigin();
                        if (object.chat != null) {
                            if (typeof object.chat !== "object")
                                throw TypeError(".dwango.nicolive.chat.data.NicoliveOrigin.chat: object expected");
                            message.chat = $root.dwango.nicolive.chat.data.NicoliveOrigin.Chat.fromObject(object.chat);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a NicoliveOrigin message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @static
                     * @param {dwango.nicolive.chat.data.NicoliveOrigin} message NicoliveOrigin
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NicoliveOrigin.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.chat = null;
                        if (message.chat != null && message.hasOwnProperty("chat"))
                            object.chat = $root.dwango.nicolive.chat.data.NicoliveOrigin.Chat.toObject(message.chat, options);
                        return object;
                    };

                    /**
                     * Converts this NicoliveOrigin to JSON.
                     * @function toJSON
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NicoliveOrigin.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for NicoliveOrigin
                     * @function getTypeUrl
                     * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    NicoliveOrigin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/dwango.nicolive.chat.data.NicoliveOrigin";
                    };

                    NicoliveOrigin.Chat = (function() {

                        /**
                         * Properties of a Chat.
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                         * @interface IChat
                         * @property {number|Long|null} [liveId] Chat liveId
                         */

                        /**
                         * Constructs a new Chat.
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin
                         * @classdesc Represents a Chat.
                         * @implements IChat
                         * @constructor
                         * @param {dwango.nicolive.chat.data.NicoliveOrigin.IChat=} [properties] Properties to set
                         */
                        function Chat(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Chat liveId.
                         * @member {number|Long} liveId
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @instance
                         */
                        Chat.prototype.liveId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new Chat instance using the specified properties.
                         * @function create
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @static
                         * @param {dwango.nicolive.chat.data.NicoliveOrigin.IChat=} [properties] Properties to set
                         * @returns {dwango.nicolive.chat.data.NicoliveOrigin.Chat} Chat instance
                         */
                        Chat.create = function create(properties) {
                            return new Chat(properties);
                        };

                        /**
                         * Encodes the specified Chat message. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveOrigin.Chat.verify|verify} messages.
                         * @function encode
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @static
                         * @param {dwango.nicolive.chat.data.NicoliveOrigin.IChat} message Chat message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Chat.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.liveId != null && Object.hasOwnProperty.call(message, "liveId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.liveId);
                            return writer;
                        };

                        /**
                         * Encodes the specified Chat message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveOrigin.Chat.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @static
                         * @param {dwango.nicolive.chat.data.NicoliveOrigin.IChat} message Chat message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Chat.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Chat message from the specified reader or buffer.
                         * @function decode
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {dwango.nicolive.chat.data.NicoliveOrigin.Chat} Chat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Chat.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dwango.nicolive.chat.data.NicoliveOrigin.Chat();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.liveId = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Chat message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {dwango.nicolive.chat.data.NicoliveOrigin.Chat} Chat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Chat.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Chat message.
                         * @function verify
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Chat.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.liveId != null && message.hasOwnProperty("liveId"))
                                if (!$util.isInteger(message.liveId) && !(message.liveId && $util.isInteger(message.liveId.low) && $util.isInteger(message.liveId.high)))
                                    return "liveId: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {dwango.nicolive.chat.data.NicoliveOrigin.Chat} Chat
                         */
                        Chat.fromObject = function fromObject(object) {
                            if (object instanceof $root.dwango.nicolive.chat.data.NicoliveOrigin.Chat)
                                return object;
                            var message = new $root.dwango.nicolive.chat.data.NicoliveOrigin.Chat();
                            if (object.liveId != null)
                                if ($util.Long)
                                    (message.liveId = $util.Long.fromValue(object.liveId)).unsigned = false;
                                else if (typeof object.liveId === "string")
                                    message.liveId = parseInt(object.liveId, 10);
                                else if (typeof object.liveId === "number")
                                    message.liveId = object.liveId;
                                else if (typeof object.liveId === "object")
                                    message.liveId = new $util.LongBits(object.liveId.low >>> 0, object.liveId.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a Chat message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @static
                         * @param {dwango.nicolive.chat.data.NicoliveOrigin.Chat} message Chat
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Chat.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.liveId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.liveId = options.longs === String ? "0" : 0;
                            if (message.liveId != null && message.hasOwnProperty("liveId"))
                                if (typeof message.liveId === "number")
                                    object.liveId = options.longs === String ? String(message.liveId) : message.liveId;
                                else
                                    object.liveId = options.longs === String ? $util.Long.prototype.toString.call(message.liveId) : options.longs === Number ? new $util.LongBits(message.liveId.low >>> 0, message.liveId.high >>> 0).toNumber() : message.liveId;
                            return object;
                        };

                        /**
                         * Converts this Chat to JSON.
                         * @function toJSON
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Chat.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Chat
                         * @function getTypeUrl
                         * @memberof dwango.nicolive.chat.data.NicoliveOrigin.Chat
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Chat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/dwango.nicolive.chat.data.NicoliveOrigin.Chat";
                        };

                        return Chat;
                    })();

                    return NicoliveOrigin;
                })();

                return data;
            })();

            return chat;
        })();

        return nicolive;
    })();

    return dwango;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        protobuf.Duration = (function() {

            /**
             * Properties of a Duration.
             * @memberof google.protobuf
             * @interface IDuration
             * @property {number|Long|null} [seconds] Duration seconds
             * @property {number|null} [nanos] Duration nanos
             */

            /**
             * Constructs a new Duration.
             * @memberof google.protobuf
             * @classdesc Represents a Duration.
             * @implements IDuration
             * @constructor
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             */
            function Duration(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Duration seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Duration nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.nanos = 0;

            /**
             * Creates a new Duration instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             * @returns {google.protobuf.Duration} Duration instance
             */
            Duration.create = function create(properties) {
                return new Duration(properties);
            };

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Duration message.
             * @function verify
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Duration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Duration} Duration
             */
            Duration.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Duration)
                    return object;
                var message = new $root.google.protobuf.Duration();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.Duration} message Duration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Duration.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Duration to JSON.
             * @function toJSON
             * @memberof google.protobuf.Duration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Duration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Duration
             * @function getTypeUrl
             * @memberof google.protobuf.Duration
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Duration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Duration";
            };

            return Duration;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
