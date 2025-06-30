import { Operation } from 'express-openapi';
import container from '../../../ModelContainer';
import * as api from '../../api';
import INicoJKApiModel from '../../../api/nicojk/INicoJKApiModel';

export const get: Operation = async (req, res) => {
    const nicojkModel = container.get<INicoJKApiModel>('INicoJKApiModel');

    try {
        const comments = await nicojkModel.getRecordedComments(
            parseInt(req.params.recordedId, 10),
            req.query.isHalfWidth as any,
        );
        if (comments === null) {
            api.responseError(res, {
                code: 404,
                message: 'recorded is not found',
            });
        } else {
            api.responseJSON(res, 200, comments);
        }
    } catch (err: any) {
        api.responseServerError(res, err.message);
    }
};

get.apiDoc = {
    summary: 'ニコニコ実況のコメントを取得',
    tags: ['nicojk'],
    description: '指定された録画時間帯の過去ログを取得',
    parameters: [
        {
            $ref: '#/components/parameters/PathRecordedId',
        },
        {
            $ref: '#/components/parameters/IsHalfWidth',
        },
    ],
    responses: {
        200: {
            description: '指定されたコメントを取得しました',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/NicoJKComments',
                    },
                },
            },
        },
        404: {
            description: 'Not Found',
        },
        default: {
            description: '予期しないエラー',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Error',
                    },
                },
            },
        },
    },
};
