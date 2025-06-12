import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace epgstation. */
export namespace epgstation {

    /** Namespace nicojk. */
    namespace nicojk {

        /** Namespace service. */
        namespace service {

            /** Namespace edge. */
            namespace edge {

                /** Properties of a ChunkedEntry. */
                interface IChunkedEntry {

                    /** ChunkedEntry channelId */
                    channelId?: (string|null);
                }

                /** Represents a ChunkedEntry. */
                class ChunkedEntry implements IChunkedEntry {

                    /**
                     * Constructs a new ChunkedEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: epgstation.nicojk.service.edge.IChunkedEntry);

                    /** ChunkedEntry channelId. */
                    public channelId: string;

                    /**
                     * Creates a new ChunkedEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChunkedEntry instance
                     */
                    public static create(properties?: epgstation.nicojk.service.edge.IChunkedEntry): epgstation.nicojk.service.edge.ChunkedEntry;

                    /**
                     * Encodes the specified ChunkedEntry message. Does not implicitly {@link epgstation.nicojk.service.edge.ChunkedEntry.verify|verify} messages.
                     * @param message ChunkedEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: epgstation.nicojk.service.edge.IChunkedEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChunkedEntry message, length delimited. Does not implicitly {@link epgstation.nicojk.service.edge.ChunkedEntry.verify|verify} messages.
                     * @param message ChunkedEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: epgstation.nicojk.service.edge.IChunkedEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChunkedEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChunkedEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): epgstation.nicojk.service.edge.ChunkedEntry;

                    /**
                     * Decodes a ChunkedEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChunkedEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): epgstation.nicojk.service.edge.ChunkedEntry;

                    /**
                     * Verifies a ChunkedEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChunkedEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChunkedEntry
                     */
                    public static fromObject(object: { [k: string]: any }): epgstation.nicojk.service.edge.ChunkedEntry;

                    /**
                     * Creates a plain object from a ChunkedEntry message. Also converts values to other types if specified.
                     * @param message ChunkedEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: epgstation.nicojk.service.edge.ChunkedEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChunkedEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ChunkedEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }
}

/** Namespace dwango. */
export namespace dwango {

    /** Namespace nicolive. */
    namespace nicolive {

        /** Namespace chat. */
        namespace chat {

            /** Namespace service. */
            namespace service {

                /** Namespace edge. */
                namespace edge {

                    /** Properties of a MessageSegment. */
                    interface IMessageSegment {

                        /** MessageSegment from */
                        from?: (google.protobuf.ITimestamp|null);

                        /** MessageSegment until */
                        until?: (google.protobuf.ITimestamp|null);

                        /** MessageSegment uri */
                        uri?: (string|null);
                    }

                    /** Represents a MessageSegment. */
                    class MessageSegment implements IMessageSegment {

                        /**
                         * Constructs a new MessageSegment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.service.edge.IMessageSegment);

                        /** MessageSegment from. */
                        public from?: (google.protobuf.ITimestamp|null);

                        /** MessageSegment until. */
                        public until?: (google.protobuf.ITimestamp|null);

                        /** MessageSegment uri. */
                        public uri: string;

                        /**
                         * Creates a new MessageSegment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MessageSegment instance
                         */
                        public static create(properties?: dwango.nicolive.chat.service.edge.IMessageSegment): dwango.nicolive.chat.service.edge.MessageSegment;

                        /**
                         * Encodes the specified MessageSegment message. Does not implicitly {@link dwango.nicolive.chat.service.edge.MessageSegment.verify|verify} messages.
                         * @param message MessageSegment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.service.edge.IMessageSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MessageSegment message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.MessageSegment.verify|verify} messages.
                         * @param message MessageSegment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.service.edge.IMessageSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MessageSegment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MessageSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.service.edge.MessageSegment;

                        /**
                         * Decodes a MessageSegment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MessageSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.service.edge.MessageSegment;

                        /**
                         * Verifies a MessageSegment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MessageSegment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MessageSegment
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.service.edge.MessageSegment;

                        /**
                         * Creates a plain object from a MessageSegment message. Also converts values to other types if specified.
                         * @param message MessageSegment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.service.edge.MessageSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MessageSegment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MessageSegment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ChunkedEntry. */
                    interface IChunkedEntry {

                        /** ChunkedEntry segment */
                        segment?: (dwango.nicolive.chat.service.edge.IMessageSegment|null);

                        /** ChunkedEntry backward */
                        backward?: (dwango.nicolive.chat.service.edge.IBackwardSegment|null);

                        /** ChunkedEntry previous */
                        previous?: (dwango.nicolive.chat.service.edge.IMessageSegment|null);

                        /** ChunkedEntry next */
                        next?: (dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext|null);
                    }

                    /**
                     * ストリーミング配信されてくる各チャンク。
                     * 開始時刻を指定してサーバーへストリームをリクエストすると、開始時刻から一定時間内に発生したメッセージがすべてチャンクとして送られてくる。
                     * 開始時刻が過去の時刻の場合は指定時間内のすべてのチャンクが一瞬で送られてきて接続がすぐに終了する。
                     * 開始時刻が現在の時刻の場合は一定時間の間接続が開いたままとなり、発生したメッセージがリアルタイムにストリームで送られてくる。
                     */
                    class ChunkedEntry implements IChunkedEntry {

                        /**
                         * Constructs a new ChunkedEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.service.edge.IChunkedEntry);

                        /** ChunkedEntry segment. */
                        public segment?: (dwango.nicolive.chat.service.edge.IMessageSegment|null);

                        /** ChunkedEntry backward. */
                        public backward?: (dwango.nicolive.chat.service.edge.IBackwardSegment|null);

                        /** ChunkedEntry previous. */
                        public previous?: (dwango.nicolive.chat.service.edge.IMessageSegment|null);

                        /** ChunkedEntry next. */
                        public next?: (dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext|null);

                        /** ChunkedEntry entry. */
                        public entry?: ("segment"|"backward"|"previous"|"next");

                        /**
                         * Creates a new ChunkedEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChunkedEntry instance
                         */
                        public static create(properties?: dwango.nicolive.chat.service.edge.IChunkedEntry): dwango.nicolive.chat.service.edge.ChunkedEntry;

                        /**
                         * Encodes the specified ChunkedEntry message. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedEntry.verify|verify} messages.
                         * @param message ChunkedEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.service.edge.IChunkedEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ChunkedEntry message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedEntry.verify|verify} messages.
                         * @param message ChunkedEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.service.edge.IChunkedEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChunkedEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChunkedEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.service.edge.ChunkedEntry;

                        /**
                         * Decodes a ChunkedEntry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ChunkedEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.service.edge.ChunkedEntry;

                        /**
                         * Verifies a ChunkedEntry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ChunkedEntry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ChunkedEntry
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.service.edge.ChunkedEntry;

                        /**
                         * Creates a plain object from a ChunkedEntry message. Also converts values to other types if specified.
                         * @param message ChunkedEntry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.service.edge.ChunkedEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ChunkedEntry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ChunkedEntry
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ChunkedEntry {

                        /** Properties of a ReadyForNext. */
                        interface IReadyForNext {

                            /** ReadyForNext at */
                            at?: (number|Long|null);
                        }

                        /** * 次のストリームの開始時刻を表すチャンク。必ずストリームの末尾に送られてくる。 */
                        class ReadyForNext implements IReadyForNext {

                            /**
                             * Constructs a new ReadyForNext.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext);

                            /** ReadyForNext at. */
                            public at: (number|Long);

                            /**
                             * Creates a new ReadyForNext instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ReadyForNext instance
                             */
                            public static create(properties?: dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext): dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext;

                            /**
                             * Encodes the specified ReadyForNext message. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext.verify|verify} messages.
                             * @param message ReadyForNext message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ReadyForNext message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext.verify|verify} messages.
                             * @param message ReadyForNext message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: dwango.nicolive.chat.service.edge.ChunkedEntry.IReadyForNext, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ReadyForNext message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ReadyForNext
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext;

                            /**
                             * Decodes a ReadyForNext message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ReadyForNext
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext;

                            /**
                             * Verifies a ReadyForNext message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ReadyForNext message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ReadyForNext
                             */
                            public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext;

                            /**
                             * Creates a plain object from a ReadyForNext message. Also converts values to other types if specified.
                             * @param message ReadyForNext
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: dwango.nicolive.chat.service.edge.ChunkedEntry.ReadyForNext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ReadyForNext to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ReadyForNext
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a BackwardSegment. */
                    interface IBackwardSegment {

                        /** BackwardSegment until */
                        until?: (google.protobuf.ITimestamp|null);

                        /** BackwardSegment segment */
                        segment?: (dwango.nicolive.chat.service.edge.PackedSegment.INext|null);

                        /** BackwardSegment snapshot */
                        snapshot?: (dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot|null);
                    }

                    /** ストリーム開始以前のメッセージを表すチャンク。必ずストリームの先頭に送られてくる。 */
                    class BackwardSegment implements IBackwardSegment {

                        /**
                         * Constructs a new BackwardSegment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.service.edge.IBackwardSegment);

                        /** BackwardSegment until. */
                        public until?: (google.protobuf.ITimestamp|null);

                        /** BackwardSegment segment. */
                        public segment?: (dwango.nicolive.chat.service.edge.PackedSegment.INext|null);

                        /** BackwardSegment snapshot. */
                        public snapshot?: (dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot|null);

                        /**
                         * Creates a new BackwardSegment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackwardSegment instance
                         */
                        public static create(properties?: dwango.nicolive.chat.service.edge.IBackwardSegment): dwango.nicolive.chat.service.edge.BackwardSegment;

                        /**
                         * Encodes the specified BackwardSegment message. Does not implicitly {@link dwango.nicolive.chat.service.edge.BackwardSegment.verify|verify} messages.
                         * @param message BackwardSegment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.service.edge.IBackwardSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackwardSegment message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.BackwardSegment.verify|verify} messages.
                         * @param message BackwardSegment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.service.edge.IBackwardSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackwardSegment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackwardSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.service.edge.BackwardSegment;

                        /**
                         * Decodes a BackwardSegment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackwardSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.service.edge.BackwardSegment;

                        /**
                         * Verifies a BackwardSegment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BackwardSegment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BackwardSegment
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.service.edge.BackwardSegment;

                        /**
                         * Creates a plain object from a BackwardSegment message. Also converts values to other types if specified.
                         * @param message BackwardSegment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.service.edge.BackwardSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BackwardSegment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BackwardSegment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PackedSegment. */
                    interface IPackedSegment {

                        /** PackedSegment messages */
                        messages?: (dwango.nicolive.chat.service.edge.IChunkedMessage[]|null);

                        /** PackedSegment next */
                        next?: (dwango.nicolive.chat.service.edge.PackedSegment.INext|null);

                        /** PackedSegment snapshot */
                        snapshot?: (dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot|null);
                    }

                    /** Represents a PackedSegment. */
                    class PackedSegment implements IPackedSegment {

                        /**
                         * Constructs a new PackedSegment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.service.edge.IPackedSegment);

                        /** PackedSegment messages. */
                        public messages: dwango.nicolive.chat.service.edge.IChunkedMessage[];

                        /** PackedSegment next. */
                        public next?: (dwango.nicolive.chat.service.edge.PackedSegment.INext|null);

                        /** PackedSegment snapshot. */
                        public snapshot?: (dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot|null);

                        /**
                         * Creates a new PackedSegment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PackedSegment instance
                         */
                        public static create(properties?: dwango.nicolive.chat.service.edge.IPackedSegment): dwango.nicolive.chat.service.edge.PackedSegment;

                        /**
                         * Encodes the specified PackedSegment message. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.verify|verify} messages.
                         * @param message PackedSegment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.service.edge.IPackedSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PackedSegment message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.verify|verify} messages.
                         * @param message PackedSegment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.service.edge.IPackedSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PackedSegment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PackedSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.service.edge.PackedSegment;

                        /**
                         * Decodes a PackedSegment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PackedSegment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.service.edge.PackedSegment;

                        /**
                         * Verifies a PackedSegment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PackedSegment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PackedSegment
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.service.edge.PackedSegment;

                        /**
                         * Creates a plain object from a PackedSegment message. Also converts values to other types if specified.
                         * @param message PackedSegment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.service.edge.PackedSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PackedSegment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PackedSegment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PackedSegment {

                        /** Properties of a Next. */
                        interface INext {

                            /** Next uri */
                            uri?: (string|null);
                        }

                        /** Represents a Next. */
                        class Next implements INext {

                            /**
                             * Constructs a new Next.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: dwango.nicolive.chat.service.edge.PackedSegment.INext);

                            /** Next uri. */
                            public uri: string;

                            /**
                             * Creates a new Next instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Next instance
                             */
                            public static create(properties?: dwango.nicolive.chat.service.edge.PackedSegment.INext): dwango.nicolive.chat.service.edge.PackedSegment.Next;

                            /**
                             * Encodes the specified Next message. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.Next.verify|verify} messages.
                             * @param message Next message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: dwango.nicolive.chat.service.edge.PackedSegment.INext, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Next message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.Next.verify|verify} messages.
                             * @param message Next message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: dwango.nicolive.chat.service.edge.PackedSegment.INext, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Next message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Next
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.service.edge.PackedSegment.Next;

                            /**
                             * Decodes a Next message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Next
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.service.edge.PackedSegment.Next;

                            /**
                             * Verifies a Next message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Next message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Next
                             */
                            public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.service.edge.PackedSegment.Next;

                            /**
                             * Creates a plain object from a Next message. Also converts values to other types if specified.
                             * @param message Next
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: dwango.nicolive.chat.service.edge.PackedSegment.Next, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Next to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Next
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a StateSnapshot. */
                        interface IStateSnapshot {

                            /** StateSnapshot uri */
                            uri?: (string|null);
                        }

                        /** Represents a StateSnapshot. */
                        class StateSnapshot implements IStateSnapshot {

                            /**
                             * Constructs a new StateSnapshot.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot);

                            /** StateSnapshot uri. */
                            public uri: string;

                            /**
                             * Creates a new StateSnapshot instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns StateSnapshot instance
                             */
                            public static create(properties?: dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot): dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot;

                            /**
                             * Encodes the specified StateSnapshot message. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.verify|verify} messages.
                             * @param message StateSnapshot message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified StateSnapshot message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot.verify|verify} messages.
                             * @param message StateSnapshot message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: dwango.nicolive.chat.service.edge.PackedSegment.IStateSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a StateSnapshot message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns StateSnapshot
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot;

                            /**
                             * Decodes a StateSnapshot message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns StateSnapshot
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot;

                            /**
                             * Verifies a StateSnapshot message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a StateSnapshot message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns StateSnapshot
                             */
                            public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot;

                            /**
                             * Creates a plain object from a StateSnapshot message. Also converts values to other types if specified.
                             * @param message StateSnapshot
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: dwango.nicolive.chat.service.edge.PackedSegment.StateSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this StateSnapshot to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for StateSnapshot
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a ChunkedMessage. */
                    interface IChunkedMessage {

                        /** ChunkedMessage meta */
                        meta?: (dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta|null);

                        /** ChunkedMessage message */
                        message?: (dwango.nicolive.chat.data.INicoliveMessage|null);

                        /** ChunkedMessage state */
                        state?: (dwango.nicolive.chat.data.INicoliveState|null);

                        /** ChunkedMessage signal */
                        signal?: (dwango.nicolive.chat.service.edge.ChunkedMessage.Signal|null);
                    }

                    /** Represents a ChunkedMessage. */
                    class ChunkedMessage implements IChunkedMessage {

                        /**
                         * Constructs a new ChunkedMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.service.edge.IChunkedMessage);

                        /** ChunkedMessage meta. */
                        public meta?: (dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta|null);

                        /** ChunkedMessage message. */
                        public message?: (dwango.nicolive.chat.data.INicoliveMessage|null);

                        /** ChunkedMessage state. */
                        public state?: (dwango.nicolive.chat.data.INicoliveState|null);

                        /** ChunkedMessage signal. */
                        public signal?: (dwango.nicolive.chat.service.edge.ChunkedMessage.Signal|null);

                        /** ChunkedMessage payload. */
                        public payload?: ("message"|"state"|"signal");

                        /**
                         * Creates a new ChunkedMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChunkedMessage instance
                         */
                        public static create(properties?: dwango.nicolive.chat.service.edge.IChunkedMessage): dwango.nicolive.chat.service.edge.ChunkedMessage;

                        /**
                         * Encodes the specified ChunkedMessage message. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedMessage.verify|verify} messages.
                         * @param message ChunkedMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.service.edge.IChunkedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ChunkedMessage message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedMessage.verify|verify} messages.
                         * @param message ChunkedMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.service.edge.IChunkedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChunkedMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChunkedMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.service.edge.ChunkedMessage;

                        /**
                         * Decodes a ChunkedMessage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ChunkedMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.service.edge.ChunkedMessage;

                        /**
                         * Verifies a ChunkedMessage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ChunkedMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ChunkedMessage
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.service.edge.ChunkedMessage;

                        /**
                         * Creates a plain object from a ChunkedMessage message. Also converts values to other types if specified.
                         * @param message ChunkedMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.service.edge.ChunkedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ChunkedMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ChunkedMessage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ChunkedMessage {

                        /** Signal enum. */
                        enum Signal {
                            Flushed = 0
                        }

                        /** Properties of a Meta. */
                        interface IMeta {

                            /** Meta id */
                            id?: (string|null);

                            /** Meta at */
                            at?: (google.protobuf.ITimestamp|null);

                            /** Meta origin */
                            origin?: (dwango.nicolive.chat.data.INicoliveOrigin|null);
                        }

                        /** Represents a Meta. */
                        class Meta implements IMeta {

                            /**
                             * Constructs a new Meta.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta);

                            /** Meta id. */
                            public id: string;

                            /** Meta at. */
                            public at?: (google.protobuf.ITimestamp|null);

                            /** Meta origin. */
                            public origin?: (dwango.nicolive.chat.data.INicoliveOrigin|null);

                            /**
                             * Creates a new Meta instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Meta instance
                             */
                            public static create(properties?: dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta): dwango.nicolive.chat.service.edge.ChunkedMessage.Meta;

                            /**
                             * Encodes the specified Meta message. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.verify|verify} messages.
                             * @param message Meta message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Meta message, length delimited. Does not implicitly {@link dwango.nicolive.chat.service.edge.ChunkedMessage.Meta.verify|verify} messages.
                             * @param message Meta message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: dwango.nicolive.chat.service.edge.ChunkedMessage.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Meta message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Meta
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.service.edge.ChunkedMessage.Meta;

                            /**
                             * Decodes a Meta message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Meta
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.service.edge.ChunkedMessage.Meta;

                            /**
                             * Verifies a Meta message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Meta
                             */
                            public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.service.edge.ChunkedMessage.Meta;

                            /**
                             * Creates a plain object from a Meta message. Also converts values to other types if specified.
                             * @param message Meta
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: dwango.nicolive.chat.service.edge.ChunkedMessage.Meta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Meta to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Meta
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }
            }

            /** Namespace data. */
            namespace data {

                /** Properties of a NicoliveMessage. */
                interface INicoliveMessage {

                    /** NicoliveMessage chat */
                    chat?: (dwango.nicolive.chat.data.IChat|null);

                    /** NicoliveMessage simpleNotification */
                    simpleNotification?: (dwango.nicolive.chat.data.ISimpleNotification|null);

                    /** NicoliveMessage gift */
                    gift?: (dwango.nicolive.chat.data.IGift|null);

                    /** NicoliveMessage nicoad */
                    nicoad?: (dwango.nicolive.chat.data.INicoad|null);

                    /** NicoliveMessage gameUpdate */
                    gameUpdate?: (dwango.nicolive.chat.data.IGameUpdate|null);

                    /** NicoliveMessage tagUpdated */
                    tagUpdated?: (dwango.nicolive.chat.data.ITagUpdated|null);

                    /** NicoliveMessage moderatorUpdated */
                    moderatorUpdated?: (dwango.nicolive.chat.data.atoms.IModeratorUpdated|null);

                    /** NicoliveMessage ssngUpdated */
                    ssngUpdated?: (dwango.nicolive.chat.data.atoms.ISSNGUpdated|null);

                    /** NicoliveMessage overflowedChat */
                    overflowedChat?: (dwango.nicolive.chat.data.IChat|null);
                }

                /** Represents a NicoliveMessage. */
                class NicoliveMessage implements INicoliveMessage {

                    /**
                     * Constructs a new NicoliveMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.INicoliveMessage);

                    /** NicoliveMessage chat. */
                    public chat?: (dwango.nicolive.chat.data.IChat|null);

                    /** NicoliveMessage simpleNotification. */
                    public simpleNotification?: (dwango.nicolive.chat.data.ISimpleNotification|null);

                    /** NicoliveMessage gift. */
                    public gift?: (dwango.nicolive.chat.data.IGift|null);

                    /** NicoliveMessage nicoad. */
                    public nicoad?: (dwango.nicolive.chat.data.INicoad|null);

                    /** NicoliveMessage gameUpdate. */
                    public gameUpdate?: (dwango.nicolive.chat.data.IGameUpdate|null);

                    /** NicoliveMessage tagUpdated. */
                    public tagUpdated?: (dwango.nicolive.chat.data.ITagUpdated|null);

                    /** NicoliveMessage moderatorUpdated. */
                    public moderatorUpdated?: (dwango.nicolive.chat.data.atoms.IModeratorUpdated|null);

                    /** NicoliveMessage ssngUpdated. */
                    public ssngUpdated?: (dwango.nicolive.chat.data.atoms.ISSNGUpdated|null);

                    /** NicoliveMessage overflowedChat. */
                    public overflowedChat?: (dwango.nicolive.chat.data.IChat|null);

                    /** NicoliveMessage data. */
                    public data?: ("chat"|"simpleNotification"|"gift"|"nicoad"|"gameUpdate"|"tagUpdated"|"moderatorUpdated"|"ssngUpdated"|"overflowedChat");

                    /**
                     * Creates a new NicoliveMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NicoliveMessage instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.INicoliveMessage): dwango.nicolive.chat.data.NicoliveMessage;

                    /**
                     * Encodes the specified NicoliveMessage message. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveMessage.verify|verify} messages.
                     * @param message NicoliveMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.INicoliveMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NicoliveMessage message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveMessage.verify|verify} messages.
                     * @param message NicoliveMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.INicoliveMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NicoliveMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NicoliveMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.NicoliveMessage;

                    /**
                     * Decodes a NicoliveMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NicoliveMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.NicoliveMessage;

                    /**
                     * Verifies a NicoliveMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NicoliveMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NicoliveMessage
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.NicoliveMessage;

                    /**
                     * Creates a plain object from a NicoliveMessage message. Also converts values to other types if specified.
                     * @param message NicoliveMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.NicoliveMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NicoliveMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NicoliveMessage
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Chat. */
                interface IChat {

                    /** Chat content */
                    content?: (string|null);

                    /** Chat name */
                    name?: (string|null);

                    /** Chat vpos */
                    vpos?: (number|null);

                    /** Chat accountStatus */
                    accountStatus?: (dwango.nicolive.chat.data.Chat.AccountStatus|null);

                    /** Chat rawUserId */
                    rawUserId?: (number|Long|null);

                    /** Chat hashedUserId */
                    hashedUserId?: (string|null);

                    /** Chat modifier */
                    modifier?: (dwango.nicolive.chat.data.Chat.IModifier|null);

                    /** Chat no */
                    no?: (number|null);
                }

                /** Represents a Chat. */
                class Chat implements IChat {

                    /**
                     * Constructs a new Chat.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IChat);

                    /** Chat content. */
                    public content: string;

                    /** Chat name. */
                    public name: string;

                    /** Chat vpos. */
                    public vpos: number;

                    /** Chat accountStatus. */
                    public accountStatus: dwango.nicolive.chat.data.Chat.AccountStatus;

                    /** Chat rawUserId. */
                    public rawUserId?: (number|Long|null);

                    /** Chat hashedUserId. */
                    public hashedUserId?: (string|null);

                    /** Chat modifier. */
                    public modifier?: (dwango.nicolive.chat.data.Chat.IModifier|null);

                    /** Chat no. */
                    public no: number;

                    /** Chat source. */
                    public source?: ("rawUserId"|"hashedUserId");

                    /**
                     * Creates a new Chat instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Chat instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IChat): dwango.nicolive.chat.data.Chat;

                    /**
                     * Encodes the specified Chat message. Does not implicitly {@link dwango.nicolive.chat.data.Chat.verify|verify} messages.
                     * @param message Chat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Chat message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Chat.verify|verify} messages.
                     * @param message Chat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Chat message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Chat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Chat;

                    /**
                     * Decodes a Chat message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Chat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Chat;

                    /**
                     * Verifies a Chat message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Chat message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Chat
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Chat;

                    /**
                     * Creates a plain object from a Chat message. Also converts values to other types if specified.
                     * @param message Chat
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Chat to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Chat
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Chat {

                    /** AccountStatus enum. */
                    enum AccountStatus {
                        Standard = 0,
                        Premium = 1
                    }

                    /** Properties of a Modifier. */
                    interface IModifier {

                        /** Modifier position */
                        position?: (dwango.nicolive.chat.data.Chat.Modifier.Pos|null);

                        /** Modifier size */
                        size?: (dwango.nicolive.chat.data.Chat.Modifier.Size|null);

                        /** Modifier namedColor */
                        namedColor?: (dwango.nicolive.chat.data.Chat.Modifier.ColorName|null);

                        /** Modifier fullColor */
                        fullColor?: (dwango.nicolive.chat.data.Chat.Modifier.IFullColor|null);

                        /** Modifier font */
                        font?: (dwango.nicolive.chat.data.Chat.Modifier.Font|null);

                        /** Modifier opacity */
                        opacity?: (dwango.nicolive.chat.data.Chat.Modifier.Opacity|null);
                    }

                    /** Represents a Modifier. */
                    class Modifier implements IModifier {

                        /**
                         * Constructs a new Modifier.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.Chat.IModifier);

                        /** Modifier position. */
                        public position: dwango.nicolive.chat.data.Chat.Modifier.Pos;

                        /** Modifier size. */
                        public size: dwango.nicolive.chat.data.Chat.Modifier.Size;

                        /** Modifier namedColor. */
                        public namedColor?: (dwango.nicolive.chat.data.Chat.Modifier.ColorName|null);

                        /** Modifier fullColor. */
                        public fullColor?: (dwango.nicolive.chat.data.Chat.Modifier.IFullColor|null);

                        /** Modifier font. */
                        public font: dwango.nicolive.chat.data.Chat.Modifier.Font;

                        /** Modifier opacity. */
                        public opacity: dwango.nicolive.chat.data.Chat.Modifier.Opacity;

                        /** Modifier color. */
                        public color?: ("namedColor"|"fullColor");

                        /**
                         * Creates a new Modifier instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Modifier instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.Chat.IModifier): dwango.nicolive.chat.data.Chat.Modifier;

                        /**
                         * Encodes the specified Modifier message. Does not implicitly {@link dwango.nicolive.chat.data.Chat.Modifier.verify|verify} messages.
                         * @param message Modifier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.Chat.IModifier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Modifier message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Chat.Modifier.verify|verify} messages.
                         * @param message Modifier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.Chat.IModifier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Modifier message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Modifier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Chat.Modifier;

                        /**
                         * Decodes a Modifier message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Modifier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Chat.Modifier;

                        /**
                         * Verifies a Modifier message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Modifier message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Modifier
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Chat.Modifier;

                        /**
                         * Creates a plain object from a Modifier message. Also converts values to other types if specified.
                         * @param message Modifier
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.Chat.Modifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Modifier to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Modifier
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Modifier {

                        /** Pos enum. */
                        enum Pos {
                            naka = 0,
                            shita = 1,
                            ue = 2
                        }

                        /** Size enum. */
                        enum Size {
                            medium = 0,
                            small = 1,
                            big = 2
                        }

                        /** ColorName enum. */
                        enum ColorName {
                            white = 0,
                            red = 1,
                            pink = 2,
                            orange = 3,
                            yellow = 4,
                            green = 5,
                            cyan = 6,
                            blue = 7,
                            purple = 8,
                            black = 9,
                            white2 = 10,
                            red2 = 11,
                            pink2 = 12,
                            orange2 = 13,
                            yellow2 = 14,
                            green2 = 15,
                            cyan2 = 16,
                            blue2 = 17,
                            purple2 = 18,
                            black2 = 19
                        }

                        /** Font enum. */
                        enum Font {
                            defont = 0,
                            mincho = 1,
                            gothic = 2
                        }

                        /** Opacity enum. */
                        enum Opacity {
                            Normal = 0,
                            Translucent = 1
                        }

                        /** Properties of a FullColor. */
                        interface IFullColor {

                            /** FullColor r */
                            r?: (number|null);

                            /** FullColor g */
                            g?: (number|null);

                            /** FullColor b */
                            b?: (number|null);
                        }

                        /** Represents a FullColor. */
                        class FullColor implements IFullColor {

                            /**
                             * Constructs a new FullColor.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: dwango.nicolive.chat.data.Chat.Modifier.IFullColor);

                            /** FullColor r. */
                            public r: number;

                            /** FullColor g. */
                            public g: number;

                            /** FullColor b. */
                            public b: number;

                            /**
                             * Creates a new FullColor instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FullColor instance
                             */
                            public static create(properties?: dwango.nicolive.chat.data.Chat.Modifier.IFullColor): dwango.nicolive.chat.data.Chat.Modifier.FullColor;

                            /**
                             * Encodes the specified FullColor message. Does not implicitly {@link dwango.nicolive.chat.data.Chat.Modifier.FullColor.verify|verify} messages.
                             * @param message FullColor message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: dwango.nicolive.chat.data.Chat.Modifier.IFullColor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FullColor message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Chat.Modifier.FullColor.verify|verify} messages.
                             * @param message FullColor message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: dwango.nicolive.chat.data.Chat.Modifier.IFullColor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FullColor message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FullColor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Chat.Modifier.FullColor;

                            /**
                             * Decodes a FullColor message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FullColor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Chat.Modifier.FullColor;

                            /**
                             * Verifies a FullColor message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FullColor message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FullColor
                             */
                            public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Chat.Modifier.FullColor;

                            /**
                             * Creates a plain object from a FullColor message. Also converts values to other types if specified.
                             * @param message FullColor
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: dwango.nicolive.chat.data.Chat.Modifier.FullColor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FullColor to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for FullColor
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of a SimpleNotification. */
                interface ISimpleNotification {

                    /** SimpleNotification ichiba */
                    ichiba?: (string|null);

                    /** SimpleNotification quote */
                    quote?: (string|null);

                    /** SimpleNotification emotion */
                    emotion?: (string|null);

                    /** SimpleNotification cruise */
                    cruise?: (string|null);

                    /** SimpleNotification programExtended */
                    programExtended?: (string|null);

                    /** SimpleNotification rankingIn */
                    rankingIn?: (string|null);

                    /** SimpleNotification rankingUpdated */
                    rankingUpdated?: (string|null);

                    /** SimpleNotification visited */
                    visited?: (string|null);
                }

                /** Represents a SimpleNotification. */
                class SimpleNotification implements ISimpleNotification {

                    /**
                     * Constructs a new SimpleNotification.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.ISimpleNotification);

                    /** SimpleNotification ichiba. */
                    public ichiba?: (string|null);

                    /** SimpleNotification quote. */
                    public quote?: (string|null);

                    /** SimpleNotification emotion. */
                    public emotion?: (string|null);

                    /** SimpleNotification cruise. */
                    public cruise?: (string|null);

                    /** SimpleNotification programExtended. */
                    public programExtended?: (string|null);

                    /** SimpleNotification rankingIn. */
                    public rankingIn?: (string|null);

                    /** SimpleNotification rankingUpdated. */
                    public rankingUpdated?: (string|null);

                    /** SimpleNotification visited. */
                    public visited?: (string|null);

                    /** SimpleNotification message. */
                    public message?: ("ichiba"|"quote"|"emotion"|"cruise"|"programExtended"|"rankingIn"|"rankingUpdated"|"visited");

                    /**
                     * Creates a new SimpleNotification instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SimpleNotification instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.ISimpleNotification): dwango.nicolive.chat.data.SimpleNotification;

                    /**
                     * Encodes the specified SimpleNotification message. Does not implicitly {@link dwango.nicolive.chat.data.SimpleNotification.verify|verify} messages.
                     * @param message SimpleNotification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.ISimpleNotification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SimpleNotification message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.SimpleNotification.verify|verify} messages.
                     * @param message SimpleNotification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.ISimpleNotification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SimpleNotification message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SimpleNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.SimpleNotification;

                    /**
                     * Decodes a SimpleNotification message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SimpleNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.SimpleNotification;

                    /**
                     * Verifies a SimpleNotification message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SimpleNotification message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SimpleNotification
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.SimpleNotification;

                    /**
                     * Creates a plain object from a SimpleNotification message. Also converts values to other types if specified.
                     * @param message SimpleNotification
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.SimpleNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SimpleNotification to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SimpleNotification
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Gift. */
                interface IGift {

                    /** Gift itemId */
                    itemId?: (string|null);

                    /** Gift advertiserUserId */
                    advertiserUserId?: (number|Long|null);

                    /** Gift advertiserName */
                    advertiserName?: (string|null);

                    /** Gift point */
                    point?: (number|Long|null);

                    /** Gift message */
                    message?: (string|null);

                    /** Gift itemName */
                    itemName?: (string|null);

                    /** Gift contributionRank */
                    contributionRank?: (number|null);
                }

                /** Represents a Gift. */
                class Gift implements IGift {

                    /**
                     * Constructs a new Gift.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IGift);

                    /** Gift itemId. */
                    public itemId: string;

                    /** Gift advertiserUserId. */
                    public advertiserUserId?: (number|Long|null);

                    /** Gift advertiserName. */
                    public advertiserName: string;

                    /** Gift point. */
                    public point: (number|Long);

                    /** Gift message. */
                    public message: string;

                    /** Gift itemName. */
                    public itemName: string;

                    /** Gift contributionRank. */
                    public contributionRank?: (number|null);

                    /** Gift _advertiserUserId. */
                    public _advertiserUserId?: "advertiserUserId";

                    /** Gift _contributionRank. */
                    public _contributionRank?: "contributionRank";

                    /**
                     * Creates a new Gift instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Gift instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IGift): dwango.nicolive.chat.data.Gift;

                    /**
                     * Encodes the specified Gift message. Does not implicitly {@link dwango.nicolive.chat.data.Gift.verify|verify} messages.
                     * @param message Gift message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IGift, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Gift message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Gift.verify|verify} messages.
                     * @param message Gift message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IGift, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Gift message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Gift
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Gift;

                    /**
                     * Decodes a Gift message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Gift
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Gift;

                    /**
                     * Verifies a Gift message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Gift message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Gift
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Gift;

                    /**
                     * Creates a plain object from a Gift message. Also converts values to other types if specified.
                     * @param message Gift
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.Gift, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Gift to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Gift
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Nicoad. */
                interface INicoad {

                    /** Nicoad v0 */
                    v0?: (dwango.nicolive.chat.data.Nicoad.IV0|null);

                    /** Nicoad v1 */
                    v1?: (dwango.nicolive.chat.data.Nicoad.IV1|null);
                }

                /** Represents a Nicoad. */
                class Nicoad implements INicoad {

                    /**
                     * Constructs a new Nicoad.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.INicoad);

                    /** Nicoad v0. */
                    public v0?: (dwango.nicolive.chat.data.Nicoad.IV0|null);

                    /** Nicoad v1. */
                    public v1?: (dwango.nicolive.chat.data.Nicoad.IV1|null);

                    /** Nicoad versions. */
                    public versions?: ("v0"|"v1");

                    /**
                     * Creates a new Nicoad instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Nicoad instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.INicoad): dwango.nicolive.chat.data.Nicoad;

                    /**
                     * Encodes the specified Nicoad message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.verify|verify} messages.
                     * @param message Nicoad message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.INicoad, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Nicoad message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.verify|verify} messages.
                     * @param message Nicoad message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.INicoad, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Nicoad message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Nicoad
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Nicoad;

                    /**
                     * Decodes a Nicoad message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Nicoad
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Nicoad;

                    /**
                     * Verifies a Nicoad message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Nicoad message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Nicoad
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Nicoad;

                    /**
                     * Creates a plain object from a Nicoad message. Also converts values to other types if specified.
                     * @param message Nicoad
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.Nicoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Nicoad to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Nicoad
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Nicoad {

                    /** Properties of a V0. */
                    interface IV0 {

                        /** V0 latest */
                        latest?: (dwango.nicolive.chat.data.Nicoad.V0.ILatest|null);

                        /** V0 ranking */
                        ranking?: (dwango.nicolive.chat.data.Nicoad.V0.IRanking[]|null);

                        /** V0 totalPoint */
                        totalPoint?: (number|null);
                    }

                    /** Represents a V0. */
                    class V0 implements IV0 {

                        /**
                         * Constructs a new V0.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.Nicoad.IV0);

                        /** V0 latest. */
                        public latest?: (dwango.nicolive.chat.data.Nicoad.V0.ILatest|null);

                        /** V0 ranking. */
                        public ranking: dwango.nicolive.chat.data.Nicoad.V0.IRanking[];

                        /** V0 totalPoint. */
                        public totalPoint: number;

                        /**
                         * Creates a new V0 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns V0 instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.Nicoad.IV0): dwango.nicolive.chat.data.Nicoad.V0;

                        /**
                         * Encodes the specified V0 message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.verify|verify} messages.
                         * @param message V0 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.Nicoad.IV0, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified V0 message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.verify|verify} messages.
                         * @param message V0 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.Nicoad.IV0, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a V0 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns V0
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Nicoad.V0;

                        /**
                         * Decodes a V0 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns V0
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Nicoad.V0;

                        /**
                         * Verifies a V0 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a V0 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns V0
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Nicoad.V0;

                        /**
                         * Creates a plain object from a V0 message. Also converts values to other types if specified.
                         * @param message V0
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.Nicoad.V0, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this V0 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for V0
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace V0 {

                        /** Properties of a Latest. */
                        interface ILatest {

                            /** Latest advertiser */
                            advertiser?: (string|null);

                            /** Latest point */
                            point?: (number|null);

                            /** Latest message */
                            message?: (string|null);
                        }

                        /** Represents a Latest. */
                        class Latest implements ILatest {

                            /**
                             * Constructs a new Latest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: dwango.nicolive.chat.data.Nicoad.V0.ILatest);

                            /** Latest advertiser. */
                            public advertiser: string;

                            /** Latest point. */
                            public point: number;

                            /** Latest message. */
                            public message?: (string|null);

                            /** Latest _message. */
                            public _message?: "message";

                            /**
                             * Creates a new Latest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Latest instance
                             */
                            public static create(properties?: dwango.nicolive.chat.data.Nicoad.V0.ILatest): dwango.nicolive.chat.data.Nicoad.V0.Latest;

                            /**
                             * Encodes the specified Latest message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.Latest.verify|verify} messages.
                             * @param message Latest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: dwango.nicolive.chat.data.Nicoad.V0.ILatest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Latest message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.Latest.verify|verify} messages.
                             * @param message Latest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: dwango.nicolive.chat.data.Nicoad.V0.ILatest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Latest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Latest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Nicoad.V0.Latest;

                            /**
                             * Decodes a Latest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Latest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Nicoad.V0.Latest;

                            /**
                             * Verifies a Latest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Latest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Latest
                             */
                            public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Nicoad.V0.Latest;

                            /**
                             * Creates a plain object from a Latest message. Also converts values to other types if specified.
                             * @param message Latest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: dwango.nicolive.chat.data.Nicoad.V0.Latest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Latest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Latest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Ranking. */
                        interface IRanking {

                            /** Ranking advertiser */
                            advertiser?: (string|null);

                            /** Ranking rank */
                            rank?: (number|null);

                            /** Ranking message */
                            message?: (string|null);

                            /** Ranking userRank */
                            userRank?: (number|null);
                        }

                        /** Represents a Ranking. */
                        class Ranking implements IRanking {

                            /**
                             * Constructs a new Ranking.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: dwango.nicolive.chat.data.Nicoad.V0.IRanking);

                            /** Ranking advertiser. */
                            public advertiser: string;

                            /** Ranking rank. */
                            public rank: number;

                            /** Ranking message. */
                            public message?: (string|null);

                            /** Ranking userRank. */
                            public userRank?: (number|null);

                            /** Ranking _message. */
                            public _message?: "message";

                            /** Ranking _userRank. */
                            public _userRank?: "userRank";

                            /**
                             * Creates a new Ranking instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Ranking instance
                             */
                            public static create(properties?: dwango.nicolive.chat.data.Nicoad.V0.IRanking): dwango.nicolive.chat.data.Nicoad.V0.Ranking;

                            /**
                             * Encodes the specified Ranking message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.Ranking.verify|verify} messages.
                             * @param message Ranking message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: dwango.nicolive.chat.data.Nicoad.V0.IRanking, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Ranking message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V0.Ranking.verify|verify} messages.
                             * @param message Ranking message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: dwango.nicolive.chat.data.Nicoad.V0.IRanking, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Ranking message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Ranking
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Nicoad.V0.Ranking;

                            /**
                             * Decodes a Ranking message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Ranking
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Nicoad.V0.Ranking;

                            /**
                             * Verifies a Ranking message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Ranking message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Ranking
                             */
                            public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Nicoad.V0.Ranking;

                            /**
                             * Creates a plain object from a Ranking message. Also converts values to other types if specified.
                             * @param message Ranking
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: dwango.nicolive.chat.data.Nicoad.V0.Ranking, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Ranking to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Ranking
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a V1. */
                    interface IV1 {

                        /** V1 totalAdPoint */
                        totalAdPoint?: (number|null);

                        /** V1 message */
                        message?: (string|null);
                    }

                    /** Represents a V1. */
                    class V1 implements IV1 {

                        /**
                         * Constructs a new V1.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.Nicoad.IV1);

                        /** V1 totalAdPoint. */
                        public totalAdPoint: number;

                        /** V1 message. */
                        public message: string;

                        /**
                         * Creates a new V1 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns V1 instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.Nicoad.IV1): dwango.nicolive.chat.data.Nicoad.V1;

                        /**
                         * Encodes the specified V1 message. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V1.verify|verify} messages.
                         * @param message V1 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.Nicoad.IV1, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified V1 message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Nicoad.V1.verify|verify} messages.
                         * @param message V1 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.Nicoad.IV1, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a V1 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns V1
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Nicoad.V1;

                        /**
                         * Decodes a V1 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns V1
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Nicoad.V1;

                        /**
                         * Verifies a V1 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a V1 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns V1
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Nicoad.V1;

                        /**
                         * Creates a plain object from a V1 message. Also converts values to other types if specified.
                         * @param message V1
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.Nicoad.V1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this V1 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for V1
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a GameUpdate. */
                interface IGameUpdate {
                }

                /** Represents a GameUpdate. */
                class GameUpdate implements IGameUpdate {

                    /**
                     * Constructs a new GameUpdate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IGameUpdate);

                    /**
                     * Creates a new GameUpdate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameUpdate instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IGameUpdate): dwango.nicolive.chat.data.GameUpdate;

                    /**
                     * Encodes the specified GameUpdate message. Does not implicitly {@link dwango.nicolive.chat.data.GameUpdate.verify|verify} messages.
                     * @param message GameUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IGameUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameUpdate message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.GameUpdate.verify|verify} messages.
                     * @param message GameUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IGameUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameUpdate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.GameUpdate;

                    /**
                     * Decodes a GameUpdate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.GameUpdate;

                    /**
                     * Verifies a GameUpdate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameUpdate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameUpdate
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.GameUpdate;

                    /**
                     * Creates a plain object from a GameUpdate message. Also converts values to other types if specified.
                     * @param message GameUpdate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.GameUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameUpdate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameUpdate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TagUpdated. */
                interface ITagUpdated {

                    /** TagUpdated tags */
                    tags?: (dwango.nicolive.chat.data.TagUpdated.ITag[]|null);

                    /** TagUpdated ownerLocked */
                    ownerLocked?: (boolean|null);
                }

                /** Represents a TagUpdated. */
                class TagUpdated implements ITagUpdated {

                    /**
                     * Constructs a new TagUpdated.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.ITagUpdated);

                    /** TagUpdated tags. */
                    public tags: dwango.nicolive.chat.data.TagUpdated.ITag[];

                    /** TagUpdated ownerLocked. */
                    public ownerLocked: boolean;

                    /**
                     * Creates a new TagUpdated instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TagUpdated instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.ITagUpdated): dwango.nicolive.chat.data.TagUpdated;

                    /**
                     * Encodes the specified TagUpdated message. Does not implicitly {@link dwango.nicolive.chat.data.TagUpdated.verify|verify} messages.
                     * @param message TagUpdated message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.ITagUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TagUpdated message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.TagUpdated.verify|verify} messages.
                     * @param message TagUpdated message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.ITagUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TagUpdated message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TagUpdated
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.TagUpdated;

                    /**
                     * Decodes a TagUpdated message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TagUpdated
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.TagUpdated;

                    /**
                     * Verifies a TagUpdated message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TagUpdated message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TagUpdated
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.TagUpdated;

                    /**
                     * Creates a plain object from a TagUpdated message. Also converts values to other types if specified.
                     * @param message TagUpdated
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.TagUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TagUpdated to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TagUpdated
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TagUpdated {

                    /** Properties of a Tag. */
                    interface ITag {

                        /** Tag text */
                        text?: (string|null);

                        /** Tag locked */
                        locked?: (boolean|null);

                        /** Tag reserved */
                        reserved?: (boolean|null);

                        /** Tag nicopediaUri */
                        nicopediaUri?: (string|null);
                    }

                    /** Represents a Tag. */
                    class Tag implements ITag {

                        /**
                         * Constructs a new Tag.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.TagUpdated.ITag);

                        /** Tag text. */
                        public text: string;

                        /** Tag locked. */
                        public locked: boolean;

                        /** Tag reserved. */
                        public reserved: boolean;

                        /** Tag nicopediaUri. */
                        public nicopediaUri: string;

                        /**
                         * Creates a new Tag instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Tag instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.TagUpdated.ITag): dwango.nicolive.chat.data.TagUpdated.Tag;

                        /**
                         * Encodes the specified Tag message. Does not implicitly {@link dwango.nicolive.chat.data.TagUpdated.Tag.verify|verify} messages.
                         * @param message Tag message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.TagUpdated.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Tag message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.TagUpdated.Tag.verify|verify} messages.
                         * @param message Tag message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.TagUpdated.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Tag message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Tag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.TagUpdated.Tag;

                        /**
                         * Decodes a Tag message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Tag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.TagUpdated.Tag;

                        /**
                         * Verifies a Tag message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Tag message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Tag
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.TagUpdated.Tag;

                        /**
                         * Creates a plain object from a Tag message. Also converts values to other types if specified.
                         * @param message Tag
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.TagUpdated.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Tag to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Tag
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Namespace atoms. */
                namespace atoms {

                    /** Properties of a ModeratorUpdated. */
                    interface IModeratorUpdated {

                        /** ModeratorUpdated operation */
                        operation?: (dwango.nicolive.chat.data.atoms.ModeratorUpdated.ModeratorOperation|null);

                        /** ModeratorUpdated operator */
                        operator?: (dwango.nicolive.chat.data.atoms.IModeratorUserInfo|null);

                        /** ModeratorUpdated updatedAt */
                        updatedAt?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a ModeratorUpdated. */
                    class ModeratorUpdated implements IModeratorUpdated {

                        /**
                         * Constructs a new ModeratorUpdated.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.atoms.IModeratorUpdated);

                        /** ModeratorUpdated operation. */
                        public operation: dwango.nicolive.chat.data.atoms.ModeratorUpdated.ModeratorOperation;

                        /** ModeratorUpdated operator. */
                        public operator?: (dwango.nicolive.chat.data.atoms.IModeratorUserInfo|null);

                        /** ModeratorUpdated updatedAt. */
                        public updatedAt?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new ModeratorUpdated instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ModeratorUpdated instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.atoms.IModeratorUpdated): dwango.nicolive.chat.data.atoms.ModeratorUpdated;

                        /**
                         * Encodes the specified ModeratorUpdated message. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModeratorUpdated.verify|verify} messages.
                         * @param message ModeratorUpdated message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.atoms.IModeratorUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ModeratorUpdated message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModeratorUpdated.verify|verify} messages.
                         * @param message ModeratorUpdated message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.atoms.IModeratorUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ModeratorUpdated message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ModeratorUpdated
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.atoms.ModeratorUpdated;

                        /**
                         * Decodes a ModeratorUpdated message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ModeratorUpdated
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.atoms.ModeratorUpdated;

                        /**
                         * Verifies a ModeratorUpdated message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ModeratorUpdated message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ModeratorUpdated
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.atoms.ModeratorUpdated;

                        /**
                         * Creates a plain object from a ModeratorUpdated message. Also converts values to other types if specified.
                         * @param message ModeratorUpdated
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.atoms.ModeratorUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ModeratorUpdated to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ModeratorUpdated
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ModeratorUpdated {

                        /** ModeratorOperation enum. */
                        enum ModeratorOperation {
                            ADD = 0,
                            DELETE = 1
                        }
                    }

                    /** Properties of a ModeratorUserInfo. */
                    interface IModeratorUserInfo {

                        /** ModeratorUserInfo userId */
                        userId?: (number|Long|null);

                        /** ModeratorUserInfo nickname */
                        nickname?: (string|null);

                        /** ModeratorUserInfo iconUrl */
                        iconUrl?: (string|null);
                    }

                    /** Represents a ModeratorUserInfo. */
                    class ModeratorUserInfo implements IModeratorUserInfo {

                        /**
                         * Constructs a new ModeratorUserInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.atoms.IModeratorUserInfo);

                        /** ModeratorUserInfo userId. */
                        public userId: (number|Long);

                        /** ModeratorUserInfo nickname. */
                        public nickname?: (string|null);

                        /** ModeratorUserInfo iconUrl. */
                        public iconUrl?: (string|null);

                        /** ModeratorUserInfo _nickname. */
                        public _nickname?: "nickname";

                        /** ModeratorUserInfo _iconUrl. */
                        public _iconUrl?: "iconUrl";

                        /**
                         * Creates a new ModeratorUserInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ModeratorUserInfo instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.atoms.IModeratorUserInfo): dwango.nicolive.chat.data.atoms.ModeratorUserInfo;

                        /**
                         * Encodes the specified ModeratorUserInfo message. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModeratorUserInfo.verify|verify} messages.
                         * @param message ModeratorUserInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.atoms.IModeratorUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ModeratorUserInfo message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModeratorUserInfo.verify|verify} messages.
                         * @param message ModeratorUserInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.atoms.IModeratorUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ModeratorUserInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ModeratorUserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.atoms.ModeratorUserInfo;

                        /**
                         * Decodes a ModeratorUserInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ModeratorUserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.atoms.ModeratorUserInfo;

                        /**
                         * Verifies a ModeratorUserInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ModeratorUserInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ModeratorUserInfo
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.atoms.ModeratorUserInfo;

                        /**
                         * Creates a plain object from a ModeratorUserInfo message. Also converts values to other types if specified.
                         * @param message ModeratorUserInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.atoms.ModeratorUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ModeratorUserInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ModeratorUserInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SSNGUpdated. */
                    interface ISSNGUpdated {

                        /** SSNGUpdated operation */
                        operation?: (dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGOperation|null);

                        /** SSNGUpdated ssngId */
                        ssngId?: (number|Long|null);

                        /** SSNGUpdated operator */
                        operator?: (dwango.nicolive.chat.data.atoms.IModeratorUserInfo|null);

                        /** SSNGUpdated type */
                        type?: (dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGType|null);

                        /** SSNGUpdated source */
                        source?: (string|null);

                        /** SSNGUpdated updatedAt */
                        updatedAt?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a SSNGUpdated. */
                    class SSNGUpdated implements ISSNGUpdated {

                        /**
                         * Constructs a new SSNGUpdated.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.atoms.ISSNGUpdated);

                        /** SSNGUpdated operation. */
                        public operation: dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGOperation;

                        /** SSNGUpdated ssngId. */
                        public ssngId: (number|Long);

                        /** SSNGUpdated operator. */
                        public operator?: (dwango.nicolive.chat.data.atoms.IModeratorUserInfo|null);

                        /** SSNGUpdated type. */
                        public type?: (dwango.nicolive.chat.data.atoms.SSNGUpdated.SSNGType|null);

                        /** SSNGUpdated source. */
                        public source?: (string|null);

                        /** SSNGUpdated updatedAt. */
                        public updatedAt?: (google.protobuf.ITimestamp|null);

                        /** SSNGUpdated _type. */
                        public _type?: "type";

                        /** SSNGUpdated _source. */
                        public _source?: "source";

                        /** SSNGUpdated _updatedAt. */
                        public _updatedAt?: "updatedAt";

                        /**
                         * Creates a new SSNGUpdated instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SSNGUpdated instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.atoms.ISSNGUpdated): dwango.nicolive.chat.data.atoms.SSNGUpdated;

                        /**
                         * Encodes the specified SSNGUpdated message. Does not implicitly {@link dwango.nicolive.chat.data.atoms.SSNGUpdated.verify|verify} messages.
                         * @param message SSNGUpdated message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.atoms.ISSNGUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SSNGUpdated message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.atoms.SSNGUpdated.verify|verify} messages.
                         * @param message SSNGUpdated message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.atoms.ISSNGUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SSNGUpdated message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SSNGUpdated
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.atoms.SSNGUpdated;

                        /**
                         * Decodes a SSNGUpdated message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SSNGUpdated
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.atoms.SSNGUpdated;

                        /**
                         * Verifies a SSNGUpdated message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SSNGUpdated message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SSNGUpdated
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.atoms.SSNGUpdated;

                        /**
                         * Creates a plain object from a SSNGUpdated message. Also converts values to other types if specified.
                         * @param message SSNGUpdated
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.atoms.SSNGUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SSNGUpdated to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SSNGUpdated
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SSNGUpdated {

                        /** SSNGOperation enum. */
                        enum SSNGOperation {
                            ADD = 0,
                            DELETE = 1
                        }

                        /** SSNGType enum. */
                        enum SSNGType {
                            USER = 0,
                            WORD = 1,
                            COMMAND = 2
                        }
                    }

                    /** Properties of a ModerationAnnouncement. */
                    interface IModerationAnnouncement {

                        /** ModerationAnnouncement message */
                        message?: (string|null);

                        /** ModerationAnnouncement guidelineItems */
                        guidelineItems?: (dwango.nicolive.chat.data.atoms.ModerationAnnouncement.GuidelineItem[]|null);

                        /** ModerationAnnouncement updatedAt */
                        updatedAt?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a ModerationAnnouncement. */
                    class ModerationAnnouncement implements IModerationAnnouncement {

                        /**
                         * Constructs a new ModerationAnnouncement.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.atoms.IModerationAnnouncement);

                        /** ModerationAnnouncement message. */
                        public message?: (string|null);

                        /** ModerationAnnouncement guidelineItems. */
                        public guidelineItems: dwango.nicolive.chat.data.atoms.ModerationAnnouncement.GuidelineItem[];

                        /** ModerationAnnouncement updatedAt. */
                        public updatedAt?: (google.protobuf.ITimestamp|null);

                        /** ModerationAnnouncement _message. */
                        public _message?: "message";

                        /**
                         * Creates a new ModerationAnnouncement instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ModerationAnnouncement instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.atoms.IModerationAnnouncement): dwango.nicolive.chat.data.atoms.ModerationAnnouncement;

                        /**
                         * Encodes the specified ModerationAnnouncement message. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModerationAnnouncement.verify|verify} messages.
                         * @param message ModerationAnnouncement message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.atoms.IModerationAnnouncement, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ModerationAnnouncement message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.atoms.ModerationAnnouncement.verify|verify} messages.
                         * @param message ModerationAnnouncement message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.atoms.IModerationAnnouncement, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ModerationAnnouncement message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ModerationAnnouncement
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.atoms.ModerationAnnouncement;

                        /**
                         * Decodes a ModerationAnnouncement message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ModerationAnnouncement
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.atoms.ModerationAnnouncement;

                        /**
                         * Verifies a ModerationAnnouncement message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ModerationAnnouncement message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ModerationAnnouncement
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.atoms.ModerationAnnouncement;

                        /**
                         * Creates a plain object from a ModerationAnnouncement message. Also converts values to other types if specified.
                         * @param message ModerationAnnouncement
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.atoms.ModerationAnnouncement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ModerationAnnouncement to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ModerationAnnouncement
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ModerationAnnouncement {

                        /** GuidelineItem enum. */
                        enum GuidelineItem {
                            UNKNOWN = 0,
                            SEXUAL = 1,
                            SPAM = 2,
                            SLANDER = 3,
                            PERSONAL_INFORMATION = 4
                        }
                    }
                }

                /** Properties of a NicoliveState. */
                interface INicoliveState {

                    /** NicoliveState statistics */
                    statistics?: (dwango.nicolive.chat.data.IStatistics|null);

                    /** NicoliveState enquete */
                    enquete?: (dwango.nicolive.chat.data.IEnquete|null);

                    /** NicoliveState moveOrder */
                    moveOrder?: (dwango.nicolive.chat.data.IMoveOrder|null);

                    /** NicoliveState marque */
                    marque?: (dwango.nicolive.chat.data.IMarque|null);

                    /** NicoliveState commentLock */
                    commentLock?: (dwango.nicolive.chat.data.ICommentLock|null);

                    /** NicoliveState commentMode */
                    commentMode?: (dwango.nicolive.chat.data.ICommentMode|null);

                    /** NicoliveState trialPanel */
                    trialPanel?: (dwango.nicolive.chat.data.ITrialPanel|null);

                    /** NicoliveState fingerPrint */
                    fingerPrint?: (dwango.nicolive.chat.data.IFingerPrint|null);

                    /** NicoliveState programStatus */
                    programStatus?: (dwango.nicolive.chat.data.IProgramStatus|null);

                    /** NicoliveState moderationAnnouncement */
                    moderationAnnouncement?: (dwango.nicolive.chat.data.atoms.IModerationAnnouncement|null);
                }

                /** Represents a NicoliveState. */
                class NicoliveState implements INicoliveState {

                    /**
                     * Constructs a new NicoliveState.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.INicoliveState);

                    /** NicoliveState statistics. */
                    public statistics?: (dwango.nicolive.chat.data.IStatistics|null);

                    /** NicoliveState enquete. */
                    public enquete?: (dwango.nicolive.chat.data.IEnquete|null);

                    /** NicoliveState moveOrder. */
                    public moveOrder?: (dwango.nicolive.chat.data.IMoveOrder|null);

                    /** NicoliveState marque. */
                    public marque?: (dwango.nicolive.chat.data.IMarque|null);

                    /** NicoliveState commentLock. */
                    public commentLock?: (dwango.nicolive.chat.data.ICommentLock|null);

                    /** NicoliveState commentMode. */
                    public commentMode?: (dwango.nicolive.chat.data.ICommentMode|null);

                    /** NicoliveState trialPanel. */
                    public trialPanel?: (dwango.nicolive.chat.data.ITrialPanel|null);

                    /** NicoliveState fingerPrint. */
                    public fingerPrint?: (dwango.nicolive.chat.data.IFingerPrint|null);

                    /** NicoliveState programStatus. */
                    public programStatus?: (dwango.nicolive.chat.data.IProgramStatus|null);

                    /** NicoliveState moderationAnnouncement. */
                    public moderationAnnouncement?: (dwango.nicolive.chat.data.atoms.IModerationAnnouncement|null);

                    /** NicoliveState _statistics. */
                    public _statistics?: "statistics";

                    /** NicoliveState _enquete. */
                    public _enquete?: "enquete";

                    /** NicoliveState _moveOrder. */
                    public _moveOrder?: "moveOrder";

                    /** NicoliveState _marque. */
                    public _marque?: "marque";

                    /** NicoliveState _commentLock. */
                    public _commentLock?: "commentLock";

                    /** NicoliveState _commentMode. */
                    public _commentMode?: "commentMode";

                    /** NicoliveState _trialPanel. */
                    public _trialPanel?: "trialPanel";

                    /** NicoliveState _fingerPrint. */
                    public _fingerPrint?: "fingerPrint";

                    /** NicoliveState _programStatus. */
                    public _programStatus?: "programStatus";

                    /** NicoliveState _moderationAnnouncement. */
                    public _moderationAnnouncement?: "moderationAnnouncement";

                    /**
                     * Creates a new NicoliveState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NicoliveState instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.INicoliveState): dwango.nicolive.chat.data.NicoliveState;

                    /**
                     * Encodes the specified NicoliveState message. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveState.verify|verify} messages.
                     * @param message NicoliveState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.INicoliveState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NicoliveState message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveState.verify|verify} messages.
                     * @param message NicoliveState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.INicoliveState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NicoliveState message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NicoliveState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.NicoliveState;

                    /**
                     * Decodes a NicoliveState message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NicoliveState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.NicoliveState;

                    /**
                     * Verifies a NicoliveState message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NicoliveState message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NicoliveState
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.NicoliveState;

                    /**
                     * Creates a plain object from a NicoliveState message. Also converts values to other types if specified.
                     * @param message NicoliveState
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.NicoliveState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NicoliveState to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NicoliveState
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Statistics. */
                interface IStatistics {

                    /** Statistics viewers */
                    viewers?: (number|Long|null);

                    /** Statistics comments */
                    comments?: (number|Long|null);

                    /** Statistics adPoints */
                    adPoints?: (number|Long|null);

                    /** Statistics giftPoints */
                    giftPoints?: (number|Long|null);
                }

                /** Represents a Statistics. */
                class Statistics implements IStatistics {

                    /**
                     * Constructs a new Statistics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IStatistics);

                    /** Statistics viewers. */
                    public viewers?: (number|Long|null);

                    /** Statistics comments. */
                    public comments?: (number|Long|null);

                    /** Statistics adPoints. */
                    public adPoints?: (number|Long|null);

                    /** Statistics giftPoints. */
                    public giftPoints?: (number|Long|null);

                    /** Statistics _viewers. */
                    public _viewers?: "viewers";

                    /** Statistics _comments. */
                    public _comments?: "comments";

                    /** Statistics _adPoints. */
                    public _adPoints?: "adPoints";

                    /** Statistics _giftPoints. */
                    public _giftPoints?: "giftPoints";

                    /**
                     * Creates a new Statistics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Statistics instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IStatistics): dwango.nicolive.chat.data.Statistics;

                    /**
                     * Encodes the specified Statistics message. Does not implicitly {@link dwango.nicolive.chat.data.Statistics.verify|verify} messages.
                     * @param message Statistics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Statistics message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Statistics.verify|verify} messages.
                     * @param message Statistics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Statistics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Statistics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Statistics;

                    /**
                     * Decodes a Statistics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Statistics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Statistics;

                    /**
                     * Verifies a Statistics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Statistics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Statistics
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Statistics;

                    /**
                     * Creates a plain object from a Statistics message. Also converts values to other types if specified.
                     * @param message Statistics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.Statistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Statistics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Statistics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Enquete. */
                interface IEnquete {

                    /** Enquete question */
                    question?: (string|null);

                    /** Enquete choices */
                    choices?: (dwango.nicolive.chat.data.Enquete.IChoice[]|null);

                    /** Enquete status */
                    status?: (dwango.nicolive.chat.data.Enquete.Status|null);
                }

                /** Represents an Enquete. */
                class Enquete implements IEnquete {

                    /**
                     * Constructs a new Enquete.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IEnquete);

                    /** Enquete question. */
                    public question: string;

                    /** Enquete choices. */
                    public choices: dwango.nicolive.chat.data.Enquete.IChoice[];

                    /** Enquete status. */
                    public status: dwango.nicolive.chat.data.Enquete.Status;

                    /**
                     * Creates a new Enquete instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Enquete instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IEnquete): dwango.nicolive.chat.data.Enquete;

                    /**
                     * Encodes the specified Enquete message. Does not implicitly {@link dwango.nicolive.chat.data.Enquete.verify|verify} messages.
                     * @param message Enquete message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IEnquete, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Enquete message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Enquete.verify|verify} messages.
                     * @param message Enquete message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IEnquete, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Enquete message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Enquete
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Enquete;

                    /**
                     * Decodes an Enquete message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Enquete
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Enquete;

                    /**
                     * Verifies an Enquete message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Enquete message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Enquete
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Enquete;

                    /**
                     * Creates a plain object from an Enquete message. Also converts values to other types if specified.
                     * @param message Enquete
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.Enquete, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Enquete to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Enquete
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Enquete {

                    /** Status enum. */
                    enum Status {
                        Closed = 0,
                        Poll = 1,
                        Result = 2
                    }

                    /** Properties of a Choice. */
                    interface IChoice {

                        /** Choice description */
                        description?: (string|null);

                        /** Choice perMille */
                        perMille?: (number|null);
                    }

                    /** Represents a Choice. */
                    class Choice implements IChoice {

                        /**
                         * Constructs a new Choice.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.Enquete.IChoice);

                        /** Choice description. */
                        public description: string;

                        /** Choice perMille. */
                        public perMille?: (number|null);

                        /** Choice _perMille. */
                        public _perMille?: "perMille";

                        /**
                         * Creates a new Choice instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Choice instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.Enquete.IChoice): dwango.nicolive.chat.data.Enquete.Choice;

                        /**
                         * Encodes the specified Choice message. Does not implicitly {@link dwango.nicolive.chat.data.Enquete.Choice.verify|verify} messages.
                         * @param message Choice message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.Enquete.IChoice, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Choice message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Enquete.Choice.verify|verify} messages.
                         * @param message Choice message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.Enquete.IChoice, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Choice message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Choice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Enquete.Choice;

                        /**
                         * Decodes a Choice message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Choice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Enquete.Choice;

                        /**
                         * Verifies a Choice message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Choice message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Choice
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Enquete.Choice;

                        /**
                         * Creates a plain object from a Choice message. Also converts values to other types if specified.
                         * @param message Choice
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.Enquete.Choice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Choice to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Choice
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a MoveOrder. */
                interface IMoveOrder {

                    /** MoveOrder jump */
                    jump?: (dwango.nicolive.chat.data.IJump|null);

                    /** MoveOrder redirect */
                    redirect?: (dwango.nicolive.chat.data.IRedirect|null);
                }

                /** Represents a MoveOrder. */
                class MoveOrder implements IMoveOrder {

                    /**
                     * Constructs a new MoveOrder.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IMoveOrder);

                    /** MoveOrder jump. */
                    public jump?: (dwango.nicolive.chat.data.IJump|null);

                    /** MoveOrder redirect. */
                    public redirect?: (dwango.nicolive.chat.data.IRedirect|null);

                    /** MoveOrder to. */
                    public to?: ("jump"|"redirect");

                    /**
                     * Creates a new MoveOrder instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MoveOrder instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IMoveOrder): dwango.nicolive.chat.data.MoveOrder;

                    /**
                     * Encodes the specified MoveOrder message. Does not implicitly {@link dwango.nicolive.chat.data.MoveOrder.verify|verify} messages.
                     * @param message MoveOrder message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IMoveOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MoveOrder message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.MoveOrder.verify|verify} messages.
                     * @param message MoveOrder message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IMoveOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MoveOrder message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MoveOrder
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.MoveOrder;

                    /**
                     * Decodes a MoveOrder message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MoveOrder
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.MoveOrder;

                    /**
                     * Verifies a MoveOrder message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MoveOrder message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MoveOrder
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.MoveOrder;

                    /**
                     * Creates a plain object from a MoveOrder message. Also converts values to other types if specified.
                     * @param message MoveOrder
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.MoveOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MoveOrder to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MoveOrder
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Jump. */
                interface IJump {

                    /** Jump content */
                    content?: (string|null);

                    /** Jump message */
                    message?: (string|null);

                    /** Jump wait */
                    wait?: (google.protobuf.IDuration|null);
                }

                /** Represents a Jump. */
                class Jump implements IJump {

                    /**
                     * Constructs a new Jump.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IJump);

                    /** Jump content. */
                    public content: string;

                    /** Jump message. */
                    public message: string;

                    /** Jump wait. */
                    public wait?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new Jump instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Jump instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IJump): dwango.nicolive.chat.data.Jump;

                    /**
                     * Encodes the specified Jump message. Does not implicitly {@link dwango.nicolive.chat.data.Jump.verify|verify} messages.
                     * @param message Jump message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IJump, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Jump message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Jump.verify|verify} messages.
                     * @param message Jump message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IJump, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Jump message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Jump
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Jump;

                    /**
                     * Decodes a Jump message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Jump
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Jump;

                    /**
                     * Verifies a Jump message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Jump message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Jump
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Jump;

                    /**
                     * Creates a plain object from a Jump message. Also converts values to other types if specified.
                     * @param message Jump
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.Jump, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Jump to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Jump
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Redirect. */
                interface IRedirect {

                    /** Redirect uri */
                    uri?: (string|null);

                    /** Redirect message */
                    message?: (string|null);

                    /** Redirect wait */
                    wait?: (google.protobuf.IDuration|null);
                }

                /** Represents a Redirect. */
                class Redirect implements IRedirect {

                    /**
                     * Constructs a new Redirect.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IRedirect);

                    /** Redirect uri. */
                    public uri: string;

                    /** Redirect message. */
                    public message: string;

                    /** Redirect wait. */
                    public wait?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new Redirect instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Redirect instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IRedirect): dwango.nicolive.chat.data.Redirect;

                    /**
                     * Encodes the specified Redirect message. Does not implicitly {@link dwango.nicolive.chat.data.Redirect.verify|verify} messages.
                     * @param message Redirect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IRedirect, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Redirect message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Redirect.verify|verify} messages.
                     * @param message Redirect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IRedirect, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Redirect message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Redirect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Redirect;

                    /**
                     * Decodes a Redirect message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Redirect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Redirect;

                    /**
                     * Verifies a Redirect message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Redirect message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Redirect
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Redirect;

                    /**
                     * Creates a plain object from a Redirect message. Also converts values to other types if specified.
                     * @param message Redirect
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.Redirect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Redirect to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Redirect
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Marque. */
                interface IMarque {

                    /** Marque display */
                    display?: (dwango.nicolive.chat.data.Marque.IDisplay|null);
                }

                /** Represents a Marque. */
                class Marque implements IMarque {

                    /**
                     * Constructs a new Marque.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IMarque);

                    /** Marque display. */
                    public display?: (dwango.nicolive.chat.data.Marque.IDisplay|null);

                    /** Marque _display. */
                    public _display?: "display";

                    /**
                     * Creates a new Marque instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Marque instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IMarque): dwango.nicolive.chat.data.Marque;

                    /**
                     * Encodes the specified Marque message. Does not implicitly {@link dwango.nicolive.chat.data.Marque.verify|verify} messages.
                     * @param message Marque message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IMarque, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Marque message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Marque.verify|verify} messages.
                     * @param message Marque message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IMarque, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Marque message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Marque
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Marque;

                    /**
                     * Decodes a Marque message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Marque
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Marque;

                    /**
                     * Verifies a Marque message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Marque message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Marque
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Marque;

                    /**
                     * Creates a plain object from a Marque message. Also converts values to other types if specified.
                     * @param message Marque
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.Marque, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Marque to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Marque
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Marque {

                    /** Properties of a Display. */
                    interface IDisplay {

                        /** Display operatorComment */
                        operatorComment?: (dwango.nicolive.chat.data.IOperatorComment|null);

                        /** Display duration */
                        duration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a Display. */
                    class Display implements IDisplay {

                        /**
                         * Constructs a new Display.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.Marque.IDisplay);

                        /** Display operatorComment. */
                        public operatorComment?: (dwango.nicolive.chat.data.IOperatorComment|null);

                        /** Display duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /** Display _duration. */
                        public _duration?: "duration";

                        /**
                         * Creates a new Display instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Display instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.Marque.IDisplay): dwango.nicolive.chat.data.Marque.Display;

                        /**
                         * Encodes the specified Display message. Does not implicitly {@link dwango.nicolive.chat.data.Marque.Display.verify|verify} messages.
                         * @param message Display message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.Marque.IDisplay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Display message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.Marque.Display.verify|verify} messages.
                         * @param message Display message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.Marque.IDisplay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Display message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Display
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.Marque.Display;

                        /**
                         * Decodes a Display message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Display
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.Marque.Display;

                        /**
                         * Verifies a Display message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Display message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Display
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.Marque.Display;

                        /**
                         * Creates a plain object from a Display message. Also converts values to other types if specified.
                         * @param message Display
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.Marque.Display, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Display to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Display
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an OperatorComment. */
                interface IOperatorComment {

                    /** OperatorComment content */
                    content?: (string|null);

                    /** OperatorComment name */
                    name?: (string|null);

                    /** OperatorComment modifier */
                    modifier?: (dwango.nicolive.chat.data.Chat.IModifier|null);

                    /** OperatorComment link */
                    link?: (string|null);
                }

                /** Represents an OperatorComment. */
                class OperatorComment implements IOperatorComment {

                    /**
                     * Constructs a new OperatorComment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IOperatorComment);

                    /** OperatorComment content. */
                    public content: string;

                    /** OperatorComment name. */
                    public name?: (string|null);

                    /** OperatorComment modifier. */
                    public modifier?: (dwango.nicolive.chat.data.Chat.IModifier|null);

                    /** OperatorComment link. */
                    public link?: (string|null);

                    /** OperatorComment _name. */
                    public _name?: "name";

                    /** OperatorComment _link. */
                    public _link?: "link";

                    /**
                     * Creates a new OperatorComment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperatorComment instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IOperatorComment): dwango.nicolive.chat.data.OperatorComment;

                    /**
                     * Encodes the specified OperatorComment message. Does not implicitly {@link dwango.nicolive.chat.data.OperatorComment.verify|verify} messages.
                     * @param message OperatorComment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IOperatorComment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperatorComment message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.OperatorComment.verify|verify} messages.
                     * @param message OperatorComment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IOperatorComment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperatorComment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperatorComment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.OperatorComment;

                    /**
                     * Decodes an OperatorComment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperatorComment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.OperatorComment;

                    /**
                     * Verifies an OperatorComment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperatorComment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperatorComment
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.OperatorComment;

                    /**
                     * Creates a plain object from an OperatorComment message. Also converts values to other types if specified.
                     * @param message OperatorComment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.OperatorComment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperatorComment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OperatorComment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommentLock. */
                interface ICommentLock {

                    /** CommentLock status */
                    status?: (dwango.nicolive.chat.data.CommentLock.Status|null);
                }

                /** Represents a CommentLock. */
                class CommentLock implements ICommentLock {

                    /**
                     * Constructs a new CommentLock.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.ICommentLock);

                    /** CommentLock status. */
                    public status: dwango.nicolive.chat.data.CommentLock.Status;

                    /**
                     * Creates a new CommentLock instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommentLock instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.ICommentLock): dwango.nicolive.chat.data.CommentLock;

                    /**
                     * Encodes the specified CommentLock message. Does not implicitly {@link dwango.nicolive.chat.data.CommentLock.verify|verify} messages.
                     * @param message CommentLock message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.ICommentLock, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommentLock message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.CommentLock.verify|verify} messages.
                     * @param message CommentLock message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.ICommentLock, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommentLock message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommentLock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.CommentLock;

                    /**
                     * Decodes a CommentLock message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommentLock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.CommentLock;

                    /**
                     * Verifies a CommentLock message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommentLock message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommentLock
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.CommentLock;

                    /**
                     * Creates a plain object from a CommentLock message. Also converts values to other types if specified.
                     * @param message CommentLock
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.CommentLock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommentLock to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommentLock
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CommentLock {

                    /** Status enum. */
                    enum Status {
                        Unretricted = 0,
                        Locked = 1
                    }
                }

                /** Properties of a CommentMode. */
                interface ICommentMode {

                    /** CommentMode layout */
                    layout?: (dwango.nicolive.chat.data.CommentMode.Layout|null);
                }

                /** Represents a CommentMode. */
                class CommentMode implements ICommentMode {

                    /**
                     * Constructs a new CommentMode.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.ICommentMode);

                    /** CommentMode layout. */
                    public layout: dwango.nicolive.chat.data.CommentMode.Layout;

                    /**
                     * Creates a new CommentMode instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommentMode instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.ICommentMode): dwango.nicolive.chat.data.CommentMode;

                    /**
                     * Encodes the specified CommentMode message. Does not implicitly {@link dwango.nicolive.chat.data.CommentMode.verify|verify} messages.
                     * @param message CommentMode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.ICommentMode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommentMode message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.CommentMode.verify|verify} messages.
                     * @param message CommentMode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.ICommentMode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommentMode message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommentMode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.CommentMode;

                    /**
                     * Decodes a CommentMode message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommentMode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.CommentMode;

                    /**
                     * Verifies a CommentMode message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommentMode message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommentMode
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.CommentMode;

                    /**
                     * Creates a plain object from a CommentMode message. Also converts values to other types if specified.
                     * @param message CommentMode
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.CommentMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommentMode to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommentMode
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CommentMode {

                    /** Layout enum. */
                    enum Layout {
                        Normal = 0,
                        SplitTop = 1,
                        Background = 2
                    }
                }

                /** Properties of a TrialPanel. */
                interface ITrialPanel {

                    /** TrialPanel panel */
                    panel?: (dwango.nicolive.chat.data.TrialPanel.Panel|null);

                    /** TrialPanel unqualifiedUser */
                    unqualifiedUser?: (dwango.nicolive.chat.data.TrialPanel.Mode|null);
                }

                /** Represents a TrialPanel. */
                class TrialPanel implements ITrialPanel {

                    /**
                     * Constructs a new TrialPanel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.ITrialPanel);

                    /** TrialPanel panel. */
                    public panel: dwango.nicolive.chat.data.TrialPanel.Panel;

                    /** TrialPanel unqualifiedUser. */
                    public unqualifiedUser: dwango.nicolive.chat.data.TrialPanel.Mode;

                    /**
                     * Creates a new TrialPanel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TrialPanel instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.ITrialPanel): dwango.nicolive.chat.data.TrialPanel;

                    /**
                     * Encodes the specified TrialPanel message. Does not implicitly {@link dwango.nicolive.chat.data.TrialPanel.verify|verify} messages.
                     * @param message TrialPanel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.ITrialPanel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TrialPanel message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.TrialPanel.verify|verify} messages.
                     * @param message TrialPanel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.ITrialPanel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TrialPanel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TrialPanel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.TrialPanel;

                    /**
                     * Decodes a TrialPanel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TrialPanel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.TrialPanel;

                    /**
                     * Verifies a TrialPanel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TrialPanel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TrialPanel
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.TrialPanel;

                    /**
                     * Creates a plain object from a TrialPanel message. Also converts values to other types if specified.
                     * @param message TrialPanel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.TrialPanel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TrialPanel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TrialPanel
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TrialPanel {

                    /** Panel enum. */
                    enum Panel {
                        Hidden = 0,
                        Display = 1
                    }

                    /** Mode enum. */
                    enum Mode {
                        Allowed = 0,
                        Restricted = 1,
                        Forbidden = 2
                    }
                }

                /** Properties of a FingerPrint. */
                interface IFingerPrint {

                    /** FingerPrint position */
                    position?: (dwango.nicolive.chat.data.FingerPrint.Position|null);

                    /** FingerPrint size */
                    size?: (dwango.nicolive.chat.data.FingerPrint.Size|null);

                    /** FingerPrint duration */
                    duration?: (google.protobuf.IDuration|null);
                }

                /** Represents a FingerPrint. */
                class FingerPrint implements IFingerPrint {

                    /**
                     * Constructs a new FingerPrint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IFingerPrint);

                    /** FingerPrint position. */
                    public position: dwango.nicolive.chat.data.FingerPrint.Position;

                    /** FingerPrint size. */
                    public size: dwango.nicolive.chat.data.FingerPrint.Size;

                    /** FingerPrint duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new FingerPrint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FingerPrint instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IFingerPrint): dwango.nicolive.chat.data.FingerPrint;

                    /**
                     * Encodes the specified FingerPrint message. Does not implicitly {@link dwango.nicolive.chat.data.FingerPrint.verify|verify} messages.
                     * @param message FingerPrint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IFingerPrint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FingerPrint message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.FingerPrint.verify|verify} messages.
                     * @param message FingerPrint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IFingerPrint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FingerPrint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FingerPrint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.FingerPrint;

                    /**
                     * Decodes a FingerPrint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FingerPrint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.FingerPrint;

                    /**
                     * Verifies a FingerPrint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FingerPrint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FingerPrint
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.FingerPrint;

                    /**
                     * Creates a plain object from a FingerPrint message. Also converts values to other types if specified.
                     * @param message FingerPrint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.FingerPrint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FingerPrint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FingerPrint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FingerPrint {

                    /** Position enum. */
                    enum Position {
                        off = 0,
                        hidarishita = 1,
                        shita = 2,
                        migishita = 3,
                        hidari = 4,
                        naka = 5,
                        migi = 6,
                        hidariue = 7,
                        ue = 8,
                        migiue = 9
                    }

                    /** Size enum. */
                    enum Size {
                        small = 0,
                        middle = 1,
                        big = 2
                    }
                }

                /** Properties of a ProgramStatus. */
                interface IProgramStatus {

                    /** ProgramStatus state */
                    state?: (dwango.nicolive.chat.data.ProgramStatus.State|null);
                }

                /** Represents a ProgramStatus. */
                class ProgramStatus implements IProgramStatus {

                    /**
                     * Constructs a new ProgramStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.IProgramStatus);

                    /** ProgramStatus state. */
                    public state: dwango.nicolive.chat.data.ProgramStatus.State;

                    /**
                     * Creates a new ProgramStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProgramStatus instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.IProgramStatus): dwango.nicolive.chat.data.ProgramStatus;

                    /**
                     * Encodes the specified ProgramStatus message. Does not implicitly {@link dwango.nicolive.chat.data.ProgramStatus.verify|verify} messages.
                     * @param message ProgramStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.IProgramStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProgramStatus message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.ProgramStatus.verify|verify} messages.
                     * @param message ProgramStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.IProgramStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProgramStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProgramStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.ProgramStatus;

                    /**
                     * Decodes a ProgramStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProgramStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.ProgramStatus;

                    /**
                     * Verifies a ProgramStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProgramStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProgramStatus
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.ProgramStatus;

                    /**
                     * Creates a plain object from a ProgramStatus message. Also converts values to other types if specified.
                     * @param message ProgramStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.ProgramStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProgramStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProgramStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ProgramStatus {

                    /** State enum. */
                    enum State {
                        Unknown = 0,
                        Ended = 1
                    }
                }

                /** Properties of a NicoliveOrigin. */
                interface INicoliveOrigin {

                    /** NicoliveOrigin chat */
                    chat?: (dwango.nicolive.chat.data.NicoliveOrigin.IChat|null);
                }

                /** Represents a NicoliveOrigin. */
                class NicoliveOrigin implements INicoliveOrigin {

                    /**
                     * Constructs a new NicoliveOrigin.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: dwango.nicolive.chat.data.INicoliveOrigin);

                    /** NicoliveOrigin chat. */
                    public chat?: (dwango.nicolive.chat.data.NicoliveOrigin.IChat|null);

                    /**
                     * Creates a new NicoliveOrigin instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NicoliveOrigin instance
                     */
                    public static create(properties?: dwango.nicolive.chat.data.INicoliveOrigin): dwango.nicolive.chat.data.NicoliveOrigin;

                    /**
                     * Encodes the specified NicoliveOrigin message. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveOrigin.verify|verify} messages.
                     * @param message NicoliveOrigin message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: dwango.nicolive.chat.data.INicoliveOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NicoliveOrigin message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveOrigin.verify|verify} messages.
                     * @param message NicoliveOrigin message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: dwango.nicolive.chat.data.INicoliveOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NicoliveOrigin message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NicoliveOrigin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.NicoliveOrigin;

                    /**
                     * Decodes a NicoliveOrigin message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NicoliveOrigin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.NicoliveOrigin;

                    /**
                     * Verifies a NicoliveOrigin message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NicoliveOrigin message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NicoliveOrigin
                     */
                    public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.NicoliveOrigin;

                    /**
                     * Creates a plain object from a NicoliveOrigin message. Also converts values to other types if specified.
                     * @param message NicoliveOrigin
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: dwango.nicolive.chat.data.NicoliveOrigin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NicoliveOrigin to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NicoliveOrigin
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace NicoliveOrigin {

                    /** Properties of a Chat. */
                    interface IChat {

                        /** Chat liveId */
                        liveId?: (number|Long|null);
                    }

                    /** Represents a Chat. */
                    class Chat implements IChat {

                        /**
                         * Constructs a new Chat.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: dwango.nicolive.chat.data.NicoliveOrigin.IChat);

                        /** Chat liveId. */
                        public liveId: (number|Long);

                        /**
                         * Creates a new Chat instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Chat instance
                         */
                        public static create(properties?: dwango.nicolive.chat.data.NicoliveOrigin.IChat): dwango.nicolive.chat.data.NicoliveOrigin.Chat;

                        /**
                         * Encodes the specified Chat message. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveOrigin.Chat.verify|verify} messages.
                         * @param message Chat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: dwango.nicolive.chat.data.NicoliveOrigin.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Chat message, length delimited. Does not implicitly {@link dwango.nicolive.chat.data.NicoliveOrigin.Chat.verify|verify} messages.
                         * @param message Chat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: dwango.nicolive.chat.data.NicoliveOrigin.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Chat message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Chat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dwango.nicolive.chat.data.NicoliveOrigin.Chat;

                        /**
                         * Decodes a Chat message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Chat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dwango.nicolive.chat.data.NicoliveOrigin.Chat;

                        /**
                         * Verifies a Chat message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Chat
                         */
                        public static fromObject(object: { [k: string]: any }): dwango.nicolive.chat.data.NicoliveOrigin.Chat;

                        /**
                         * Creates a plain object from a Chat message. Also converts values to other types if specified.
                         * @param message Chat
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: dwango.nicolive.chat.data.NicoliveOrigin.Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Chat to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Chat
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
