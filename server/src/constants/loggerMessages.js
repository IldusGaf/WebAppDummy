module.exports = {
    userService: {
        GET_USER_LIST_INPUT_PARAMS: '[UserService.getUserList] page={} limit={}',
        GET_USER_LIST_SUCCESS: '[UserService.getUserList] success status={} response={}',
        GET_USER_LIST_ERROR: '[UserService.getUserList] error status={} response={}',

        GET_USER_INPUT_PARAMS: '[UserService.getUser] id={}',
        GET_USER_SUCCESS: '[UserService.getUser] success status={} response={}',
        GET_USER_ERROR: '[UserService.getUser] error status={} response={}',

        UPDATE_USER_INPUT_PARAMS: '[UserService.updateUser] id={} body={}',
        UPDATE_USER_SUCCESS: '[UserService.updateUser] success status={} response={}',
        UPDATE_USER_FAIL: '[UserService.updateUser] fail status={} response={}',
        UPDATE_USER_ERROR: '[UserService.updateUser] error status={} response={}',

        CREATE_USER_INPUT_PARAMS: '[UserService.createUser] INPUT PARAMS body={}',
        CREATE_USER_SUCCESS: '[UserService.createUser] success status={} response={}',
        CREATE_USER_FAIL: '[UserService.createUser] fail status={} response={}',
        CREATE_USER_ERROR: '[UserService.createUser] error status={} response={}',
    },
    userRepository: {
        GET_USER_LIST_THIRD_PARTY_INVOKE: '[UserRepository.getUserListThirdParty] invoke dummyApi.getUserListThirdParty',
        GET_USER_LIST_THIRD_PARTY_REPLY_SUCCESS: '[UserRepository.getUserListThirdParty] reply {}',
        GET_USER_LIST_THIRD_PARTY_REPLY_ERROR: '[UserRepository.getUserListThirdParty] error {}',
        GET_USER_LIST_THIRD_PARTY_REPLY_RESULT: '[UserRepository.getUserListThirdParty] result {}',

        GET_USER_THIRD_PARTY_INVOKE: '[UserRepository.getUserThirdParty] invoke dummyApi.getUserThirdParty id={}',
        GET_USER_THIRD_PARTY_REPLY_SUCCESS: '[UserRepository.getUserThirdParty] reply {}',
        GET_USER_THIRD_PARTY_REPLY_ERROR: '[UserRepository.getUserThirdParty] error {}',
        GET_USER_THIRD_PARTY_REPLY_RESULT: '[UserRepository.getUserThirdParty] result {}',
    },
    userActions: {
        UPDATE_USER_INVOKE: '[UserActions.updateUserThirdParty] invoke dummyApi.updateUserApi id={} body={}',
        UPDATE_USER_REPLY_SUCCESS: '[UserActions.updateUserThirdParty] success {}',
        UPDATE_USER_REPLY_ERROR: '[UserActions.updateUserThirdParty] error {}',

        CREATE_USER_INVOKE: '[UserActions.createUserThirdParty] invoke dummyApi.createUserApi body={}',
        CREATE_USER_REPLY_SUCCESS: '[UserActions.createUserThirdParty] success {}',
        CREATE_USER_REPLY_ERROR: '[UserActions.createUserThirdParty] error {}',
    },
    postService: {
        GET_POST_LIST_INPUT_PARAMS: '[PostService.getPostList] page={} limit={}',
        GET_POST_LIST_SUCCESS: '[PostService.getPostList] success status={} response={}',
        GET_POST_LIST_ERROR: '[PostService.getPostList] error status={} response={}',

        GET_POST_INPUT_PARAMS: '[PostService.getPost] id={}',
        GET_POST_SUCCESS: '[PostService.getPost] success status={} response={}',
        GET_POST_ERROR: '[PostService.getPost] error status={} response={}',

        GET_POST_BY_USER_INPUT_PARAMS: '[PostService.getPostByUser userId={}',
        GET_POST_BY_USER_SUCCESS: '[PostService.getPostByUser success status={} response={}',
        GET_POST_BY_USER_ERROR: '[PostService.getPostByUser error status={} response={}',
    },
    postRepository: {
        GET_POST_LIST_THIRD_PARTY_INVOKE: '[PostRepository.getPostListThirdParty] invoke dummyApi.getPostListThirdParty',
        GET_POST_LIST_THIRD_PARTY_REPLY_SUCCESS: '[PostRepository.getPostListThirdParty] reply {}',
        GET_POST_LIST_THIRD_PARTY_REPLY_ERROR: '[PostRepository.getPostListThirdParty] error {}',
        GET_POST_LIST_THIRD_PARTY_REPLY_RESULT: '[PostRepository.getPostListThirdParty] result {}',

        GET_POST_THIRD_PARTY_INVOKE: '[PostRepository.getPostThirdParty] invoke dummyApi.getPostThirdParty id={}',
        GET_POST_THIRD_PARTY_REPLY_SUCCESS: '[PostRepository.getPostThirdParty] reply {}',
        GET_POST_THIRD_PARTY_REPLY_ERROR: '[PostRepository.getPostThirdParty] error {}',
        GET_POST_THIRD_PARTY_REPLY_RESULT: '[PostRepository.getPostThirdParty] result {}',

        GET_POST_BY_USER_THIRD_PARTY_INVOKE: '[PostRepository.getPostByUserThirdParty] invoke dummyApi.getPostByUserThirdParty id={}',
        GET_POST_BY_USER_THIRD_PARTY_REPLY_SUCCESS: '[PostRepository.getPostByUserThirdParty] reply {}',
        GET_POST_BY_USER_THIRD_PARTY_REPLY_ERROR: '[PostRepository.getPostByUserThirdParty] error {}',
        GET_POST_BY_USER_THIRD_PARTY_REPLY_RESULT: '[PostRepository.getPostByUserThirdParty] result {}',
    },
    commentService: {
        GET_COMMENT_LIST_INPUT_PARAMS: '[CommentService.getCommentList] postId={} page={} limit={}',
        GET_COMMENT_LIST_SUCCESS: '[CommentService.getCommentList] success status={} response={}',
        GET_COMMENT_LIST_ERROR: '[CommentService.getCommentList] error status={} response={}',
    },
    commentRepository: {
        GET_COMMENT_LIST_THIRD_PARTY_INVOKE: '[CommentRepository.getCommentListThirdParty] invoke dummyApi.getCommentListThirdParty id={}',
        GET_COMMENT_LIST_THIRD_PARTY_REPLY_SUCCESS: '[CommentRepository.getCommentListThirdParty] reply {}',
        GET_COMMENT_LIST_THIRD_PARTY_REPLY_ERROR: '[CommentRepository.getCommentListThirdParty] error {}',
        GET_COMMENT_LIST_THIRD_PARTY_REPLY_RESULT: '[CommentRepository.getCommentListThirdParty] result {}',
    },
}