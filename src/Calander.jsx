import React from "react";

const Calandar = () => {
  return (
    <div className="calendar mt-10  mr-3">
      <h2 className='text-lg font-bold' >September 2023</h2>
      <div className="calendar-days flex gap-2 font-semibold">
        <div className="day-header">Sun</div>
        <div className="day-header">Mon</div>
        <div className="day-header">Tue</div>
        <div className="day-header">Wed</div>
        <div className="day-header">Thu</div>
        <div className="day-header">Fri</div>
        <div className="day-header">Sat</div> 
        {/* {generateCalendarDays()  } */}
      </div>
      <div className='flex gap-7 ml-1 mt-1'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>
      <div className='flex gap-6 ml-1 mt-1'>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div className='-ml-2' >14</div>
      </div>
      <div className='flex gap-5 ml-1 mt-1'>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
      </div>
      <div className='flex gap-5 ml-1 mt-1'>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
      </div>
      <div className='flex gap-5 ml-1 mt-1'>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        
      </div>
    </div>
  );
}

export default Calandar;
