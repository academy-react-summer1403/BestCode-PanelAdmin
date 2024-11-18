// ** Third Party Components
import Chart from 'react-apexcharts'
import { MoreVertical } from 'react-feather'
import { useEffect , useState } from 'react'
import { getUserlist } from '../../../../../core/services/api/usersmanager'
// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

// ** Icons Imports
import Ostad from '../../../../../assets/images/avatars/6-small.png'
import daneshjo from '../../../../../assets/images/avatars/1-small.png'
import Admin from '../../../../../assets/images/avatars/2-small.png'
import User from '../../../../../assets/images/avatars/8-small.png'
import BadUser from '../../../../../assets/images/avatars/4-small.png'

const CardBrowserState = ({ colors, trackBgColor }) => {
  const [userRoles, setUserRoles] = useState([]); 
  const [percentages, setPercentages] = useState({});

  console.log(percentages)

  const getUserList1 = async () => {
    try {
      const data = await getUserlist();
      setUserRoles(data?.roles || [])
    } catch (error) {
      console.error("Error fetching user roles:", error);
    }
  };
  const calculatePercentages = (roles) => {
    const totalRoles = roles.reduce((sum, role) => sum + role.roleNumber, 0)

    if (totalRoles === 0) return {}; 

    const calculatedPercentages = {};
    roles.forEach((role) => {
      calculatedPercentages[role.roleName] = ((role.roleNumber / totalRoles) * 100).toFixed(2);
    });

    return calculatedPercentages;
  };

  useEffect(() => {
     getUserList1()
  }, [])

  const studentValue = percentages?.Student ? parseFloat(percentages.Student) : 0;
  const adminValue  =  percentages?.Administrator ? parseFloat(percentages?.Administrator) : 0;
  const TeacherValue  =  percentages?.Teacher ? parseFloat(percentages?.Teacher) : 0;
  const employadminvalue = percentages?.['Employee.Admin'] ? parseFloat(percentages?.['Employee.Admin'] ) : 0;
  const emlploywritervale =  percentages?.['Employee.Writer'] ? parseFloat(percentages?.['Employee.Writer'] ) : 0;
  const refreevale = percentages?.Referee ? parseFloat(percentages?.Referee) : 0;
  const supportvale = percentages?.Support ? parseFloat(percentages?.Support) : 0;
  const touradminvale = percentages?.TournamentAdmin ? parseFloat(percentages?.TournamentAdmin) : 0;
  const coursasstance = percentages?.CourseAssistance ? parseFloat(percentages?.CourseAssistance) : 0;
  const tourMentorvale = percentages?.TournamentMentor ? parseFloat(percentages?.TournamentMentor) : 0;
  useEffect(() => {
    if (userRoles.length > 0) {
      const percentages = calculatePercentages(userRoles);
      setPercentages(percentages);
    }
  }, [userRoles]);
 
   const statesArr = [
    {
      avatar: daneshjo,
      title: ' دانشجویان ',
      value: percentages?.Student,
      chart: {
        type: 'radialBar',
        series: [studentValue],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.primary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: Ostad,
      title: ' اساتید ',
      value: percentages?.Teacher,
      chart: {
        type: 'radialBar',
        series: [TeacherValue],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.warning.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: Admin,
      title: 'ادمین ها',
      value: percentages?.Administrator,
      chart: {
        type: 'radialBar',
        series: [adminValue],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.secondary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: User,
      title: ' کارمند ادمین',
      value: percentages?.['Employee.Admin'],
      chart: {
        type: 'radialBar',
        series: [employadminvalue],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.info.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: BadUser,
      title: ' کارمند نویسنده',
      value: percentages?.['Employee.Writer'],
      chart: {
        type: 'radialBar',
        series: [emlploywritervale],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.secondary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: BadUser,
      title: 'داور',
      value: percentages?.Referee,
      chart: {
        type: 'radialBar',
        series: [refreevale],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.warning.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: BadUser,
      title: ' پشتیبانی',
      value: percentages?.Support,
      chart: {
        type: 'radialBar',
        series: [supportvale],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.danger.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: BadUser,
      title: 'مدیریت مسابقات ',
      value: percentages?.TournamentAdmin,
      chart: {
        type: 'radialBar',
        series: [touradminvale],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.info.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: BadUser,
      title: ' کمک دوره',
      value: percentages?.CourseAssistance,
      chart: {
        type: 'radialBar',
        series: [coursasstance],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.danger.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: BadUser,
      title: ' مربی مسابقات',
      value: percentages?.TournamentMentor,
      chart: {
        type: 'radialBar',
        series: [tourMentorvale],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.dark.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
  ]

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.title} className='browser-states'>
          <div className='d-flex'>
            <img className='rounded me-1' src={state.avatar} height='30' alt={state.title} />
            <h6 className='align-self-center mb-0'>{state.title}</h6>
          </div>
          <div className='d-flex align-items-center'>
            <div className='fw-bold text-body-heading me-1'>{state.value}</div>
            <Chart
              options={state.chart.options}
              series={state.chart.series}
              type={state.chart.type}
              height={state.chart.height}
              width={state.chart.width}
            />
          </div>
        </div>
      )
    })
  }

  return (
    <Card className='card-browser-states'>
      <CardHeader>
        <div>
          <CardTitle tag='h4'>انواع کاربران</CardTitle>
          <CardText className='font-small-2'> شمارش 1403 </CardText>
        </div>
        <UncontrolledDropdown className='chart-dropdown'>
          <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            <MoreVertical size={18} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem className='w-100'>Last 28 Days</DropdownItem>
            <DropdownItem className='w-100'>Last Month</DropdownItem>
            <DropdownItem className='w-100'>Last Year</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>{renderStates()}</CardBody>
    </Card>
  )
}

export default CardBrowserState
