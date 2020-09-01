import React from 'react'
import { invokeMap, fromPairs } from 'lodash'

import Editor from '@component/Editor'
import { Typography, Hidden, Paper } from '@material-ui/core'

export default (props) => {
    const {
        history,
        match: {
            params: { id },
        },
        location: {
            search
        }
    } = props
    const requestParams = fromPairs(
        invokeMap(
            search.split('?').slice(-1)[0].split('&'),
            String.prototype.split,
            '='
        )
    )
    return (
        <div className="">
            <Paper>
                <div className="border-0 border-b border-solid border-gray-400">
                    <Typography className="py-4 px-6" variant="h5">
                        {id ? '编辑主题帖' : '新建主题帖'}
                    </Typography>
                </div>
                <div>
                    <Editor requestParams={requestParams}/>
                </div>
            </Paper>
        </div>
    )
}
