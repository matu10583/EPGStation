import { Operation } from 'express-openapi';
import IRecordedApiModel from '../../../../api/recorded/IRecordedApiModel';
import container from '../../../../ModelContainer';
import * as api from '../../../api';
import { RecordedPlayState } from '../../../../../../api';

export const put: Operation = async (req, res) => {
    const recordedApiModel = container.get<IRecordedApiModel>('IRecordedApiModel');
    try {
        const param = req.body as RecordedPlayState;
        await recordedApiModel.changeLastPlayTime(parseInt(req.params.recordedId, 10), param.lastPlayedPosition);
        api.responseJSON(res, 200, { code: 200 });
    } catch (err: any) {
        api.responseServerError(res, err.message);
    }
};

put.apiDoc = {
    summary: '録画の最終再生時刻を更新',
    tags: ['recorded'],
    description: '録画の最終再生時刻を更新',
    parameters: [
        {
            $ref: '#/components/parameters/PathRecordedId',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/RecordedPlayState',
                },
            },
        },
        required: true,
    },
    responses: {
        200: {
            description: '最終再生時刻を更新しました',
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
