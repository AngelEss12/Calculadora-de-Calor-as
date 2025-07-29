import { use, useMemo, type Dispatch } from "react";
import type { Activity } from "../types";
import { categories } from "../data/categories";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import type { ActivityActions } from "../reducers/activityReducer";

type ActivityListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({ activities, dispatch }: ActivityListProps) {

    const categoryName = useMemo(() => (category : Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
    , [activities]);

    const isEmptyActivities = useMemo(() => activities.length === 0, [activities]);

  return (
    <>
        <h2 className="text-4xl font-bold text-slate-600 text-center">
            Comida y Actividades
        </h2>

        { isEmptyActivities ? <p className="text-center text-2xl pt-8">No hay actividades aún...</p> :
        
        activities.map(activity => (
            <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow-md">
                <div className="space-y-2 relative">
                    <p className={`absolute -top-8 -left-8 px-10 py-2 shadow-md text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500 shadow-lime-700' : 'bg-orange-500 shadow-orange-700'}`}>
                        {categoryName(+activity.category)}
                    </p>

                    <p className="font-bold text-2xl pt-5">{activity.name}</p>

                    <p className={`font-black text-4xl text-lime-500 ${activity.category === 1 ? 'text-lime-500' : 'text-orange-500'}`}>
                        {activity.calories} {''}
                        <span>Calorias</span>
                    </p>
                </div>

                <div className="flex gap-5 items-center">
                    <button className="text-slate-500 hover:text-slate-700 transition-colors"
                    onClick={() => dispatch({ type: 'set-activeId', payload: { id: activity.id } })}
                    >
                        <PencilSquareIcon className="w-8 h-8 text-gray-800" />
                    </button>

                    <button
                    onClick={() => dispatch({ type: 'delete-activity', payload: { id: activity.id } })}
                    >
                        <XCircleIcon className="w-8 h-8 text-red-700" />
                    </button>
                </div>
            </div>
        ))}
    </>
  )
}
