import React, { Component } from 'react'
import { getUsers } from '../api/apiCalls'
import { withTranslation } from 'react-i18next'

class UserList extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        getUsers().then(response => {
            this.setState({ users: response.data });
        })
    }

    render() {
        const { users } = this.state;
        const { t } = this.props;
        return (
            <div className="card">
                <h3 className="card-header text-center">{t('Users')}</h3>
                <div className="list-group-flush">
                    {users.map((user, index) => (
                        <div key={user.username} className="list-group-item list-group-item-action">{user.username}</div>
                    ))}
                </div>

            </div>
        )
    }
}

export default withTranslation()(UserList);