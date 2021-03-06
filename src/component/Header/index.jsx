import React from 'react'
import { withRouter } from 'react-router-dom'
import { useConcent } from 'concent'

import { fade, makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Avatar,
    IconButton,
    Hidden,
} from '@material-ui/core'
import { Search as SearchIcon, Home as HomeIcon } from '@material-ui/icons'
import UserHoverDialog from './UserHoverDialog'
import Popover from '@material-ui/core/Popover'

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    IconSpace: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}))

export default withRouter((props) => {
    const ctx = useConcent({
        module: 'user',
        state: {
            anchorEl: null,
        },
    })
    const classes = useStyles()

    const userHoverId = Boolean(ctx.state.anchorEl) ? 'user-hover' : undefined

    const handlePopoverOpen = (event) => {
        ctx.setState({ anchorEl: event.currentTarget })
    }

    const handlePopoverClose = () => {
        ctx.setState({ anchorEl: null })
    }

    return (
        <AppBar position="relative">
            <Toolbar>
                {/* 标题 */}
                <Typography
                    onClick={() => props.history.push('/')}
                    className={classes.title + ' cursor-pointer'}
                    variant="h6"
                    noWrap
                >
                    NEU BBS
                </Typography>

                {/* 回到主页按钮 */}
                <Hidden smUp>
                    <IconButton
                        edge="start"
                        className={classes.homeIcon}
                        onClick={() => props.history.push('/')}
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <HomeIcon />
                    </IconButton>
                </Hidden>

                {/* 搜索框 */}
                <div
                    className={
                        'flex ml-6 bg-white bg-opacity-25 hover:bg-opacity-50 px-1 rounded-md ' +
                        classes.search
                    }
                >
                    <div className="flex items-center ml-2 mr-1">
                        <SearchIcon />
                    </div>
                    <InputBase
                        classes={{ root: classes.inputRoot, input: classes.inputInput }}
                        placeholder="搜索..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className="flex-grow" />

                {/* 用户头像 */}
                <div className="flex flex-end" aria-describedby={userHoverId}>
                    <IconButton onClick={handlePopoverOpen} onMouseEnter={handlePopoverOpen}>
                        <Avatar
                            className={classes.small}
                            src={
                                ctx.moduleState.avatarPath ? ctx.moduleState.avatarPath : undefined
                            }
                            alt={ctx.moduleState.nickname ? ctx.moduleState.nickname : undefined}
                        />
                    </IconButton>
                    <Popover
                        id={userHoverId}
                        open={Boolean(ctx.state.anchorEl)}
                        anchorEl={ctx.state.anchorEl}
                        onClose={handlePopoverClose}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        keepMounted
                        disableScrollLock
                    >
                        <div className="p-5" style={{ minWidth: '16rem' }}>
                            <UserHoverDialog onCallClose={() => ctx.setState({ anchorEl: null })} />
                        </div>
                    </Popover>
                </div>
            </Toolbar>
        </AppBar>
    )
})
