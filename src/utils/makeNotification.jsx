import * as Icons from 'react-icons/fa';

export const makeNotification = (iconName, color) => {
    const NotificationBase = ({title, message}) =>{
        const Icon = Icons[`Fa${iconName}`]

        return(
            <div className={`bg-${color}-100 border-t-4 border-${color}-500 rounded-b text-${color}-900 px-4 py-3 shadow-md`}
                 role="alert">
                <div className="flex">
                    <div className="py-1">
                        <Icon size={25} className="mr-2"/>
                    </div>
                    <div>
                        <p className="font-bold">{title}</p>
                        <p className="text-sm">{message}</p>
                    </div>
                </div>
            </div>
        )
    }

    return NotificationBase;
};
