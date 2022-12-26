import React, { useContext } from 'react'
import { Avatar, Dropdown } from 'components/ui'
import withHeaderItem from 'utils/hoc/withHeaderItem'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineUser, HiOutlineCog, HiOutlineLogout } from 'react-icons/hi'
import { FiActivity } from 'react-icons/fi'

import useAuth from 'utils/hooks/useAuth'
import useAuthContext from 'utils/hooks/useAuthContext'



const dropdownItemList = [
	{ label: 'Profile', path: '/app/account/settings/profile', icon: <HiOutlineUser /> },
	{ label: 'Account Setting', path: '/app/account/settings/profile', icon: <HiOutlineCog /> },
	{ label: 'Activity Log', path: '/app/account/activity-log', icon: <FiActivity /> },
]

export const UserDropdown = ({ className }) => {

	const user = useSelector((state) => state?.auth?.user)
	console.log(user);
	const { isLoading, logOut } = useAuthContext()

	const UserAvatar = (
		<div className={classNames(className, 'flex items-center gap-2')}>
			<Avatar size={32} shape="circle" src="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
			<div className="hidden md:block">
				<div className="text-xs capitalize">{!isLoading && user.authority[0] || 'guest'}</div>
				<div className="font-bold">{user.authority[0] && user?.userName}</div>
			</div>
		</div>
	)


	return (
		<div>
			<Dropdown menuStyle={{ minWidth: 240 }} renderTitle={UserAvatar} placement="bottom-end">
				<Dropdown.Item variant="header">
					<div className="py-2 px-3 flex items-center gap-2">
						<Avatar shape="circle" src="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
						<div>
							<div className="font-bold text-gray-900 dark:text-gray-100">{user.authority[0] && user?.userName}</div>
							<div className="text-xs">{!isLoading && user?.email}</div>
						</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Item variant="divider" />
				{dropdownItemList.map(item => (
					<Dropdown.Item eventKey={item.label} key={item.label} className="mb-1">
						<Link className="flex gap-2 items-center" to={item.path}>
							<span className="text-xl opacity-50">{item.icon}</span>
							<span>{item.label}</span>
						</Link>
					</Dropdown.Item>
				))}
				<Dropdown.Item variant="divider" />
				<Dropdown.Item onClick={logOut} eventKey="Sign Out" className="gap-2">
					<span className="text-xl opacity-50">
						<HiOutlineLogout />
					</span>
					<span>Sign Out</span>
				</Dropdown.Item>
			</Dropdown>
		</div>
	)
}

export default withHeaderItem(UserDropdown)
