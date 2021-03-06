const perfix = '/topic'

const url = (value) => {
    return perfix + value
}

export default {
    // 获取对应板块帖子
    boardTopicList: url('/board-topic-list'),
    // 获得对应用户的帖子
    userTopicList: url('/user-topic-list'),
    // 主题帖详细信息
    topicDetail: url('/topic-detail'),
    // 发布主题帖
    addTopic: url('/add-topic'),
    // 编辑主题帖
    updateTopic: url('/update-topic'),
    // 删除主题帖
    deleteTopic: url('/delete-topic'),
}
