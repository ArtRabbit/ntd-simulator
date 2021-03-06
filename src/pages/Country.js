import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import SimpleDialog from 'pages/components/SimpleDialog'
import { useDataAPI, useUIState } from 'hooks/stateHooks'
import { Layout } from 'layout'
import Map from 'components/Map'
import HeadWithInputs from 'pages/components/HeadWithInputs'
import SelectCountry from 'pages/components/SelectCountry'

const useStyles = makeStyles(theme => ({
    headLeftColumn: {
        textAlign: 'left',
    },
    headRightColumn: {
        textAlign: 'right',
        padding: theme.spacing(2),
    },
    chartContainer: {
        position: 'relative',
        width: '100%',
    },
    settings: {
        position: "relative",
        padding: theme.spacing(4, 0, 0, 0),
        display: 'flex',
        flexDirection: 'column',

    },
    section: {
        position: "relative",
        backgroundColor: theme.palette.secondary.light,
        width: `calc(100% + ${theme.spacing(12)}px)`,
        marginLeft: -theme.spacing(6),
        padding: theme.spacing(4, 6),
    },
    legend: {
        marginTop: theme.spacing(2),
        color: theme.palette.text.secondary,
    }
}))


const Country = props => {
    const [notAvaliableAlert, setnotAvaliableAlert] = useState(false)
    const [alertText, setAlertText] = useState('')

    const classes = useStyles()
    const {
        iuFeatures,
        countryFeatures,
        iuScales,
        //stateFeatures,
        //stateScales,
        //iuData,
    } = useDataAPI()

    const { country } = useUIState()
    
    // output csv with included and excluded data
    /*
    if ( iuData != undefined ) {
        let csv = [['IU','IUstatus']]
        forEach(iuData['data'],(iu,i)=>{
            //console.log(iu);
            if ( iu.endemicity == 'Non-endemic' || iu.prevalence['2000'] == null ) {
                csv.push([iu.id,'Excluded'])
            } else {
                csv.push([iu.id,'Included'])
            }
            
        })
        let csvContent = "data:text/csv;charset=utf-8," 
            + csv.map(e => e.join(",")).join("\n");
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "my_data.csv");
        document.body.appendChild(link); // Required for FF
        link.click();

    }*/

    return (
        <Layout>
            <HeadWithInputs
                title="prevalence simulator"
            />


            <SelectCountry selectIU={true} />

            <section className={classes.section}>
                <div className={classes.settings}>
                    <Map
                        countryFeatures={countryFeatures}
                        //stateFeatures={stateFeaturesCurrentCountry}
                        iuFeatures={iuFeatures}
                        colorScale={iuScales.prev}
                        height={720}
                        trendMode={false}
                        disableZoom={true}
                        country={country}
                        showNotAvailable={(value)=>{
                            setAlertText(value)
                            setnotAvaliableAlert(true)
                        }}
                    />
                </div>
                <Typography component="h6" variant="h6" className={classes.legend}>Prevalence map and trends since 2010.</Typography>
            </section>
            
            {notAvaliableAlert &&
                <SimpleDialog
                title={alertText}
                onClose={() => {
                    setnotAvaliableAlert(false)
                }}
                open={notAvaliableAlert}
                />
            }


        </Layout>
        
    )
}
export default observer(Country)
