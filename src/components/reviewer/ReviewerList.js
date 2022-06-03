import {alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import {visuallyHidden} from '@mui/utils';
import {useEffect, useState} from "react";
import apiCall from "../api/api";
import {Checkbox, FormGroup, Popover} from "@mui/material";

function descendingComparator(a, b, orderBy) {

    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {

    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const filterStyle = {
    position: 'absolute',
    top: '30%',
    left: '78%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 10,
};

const headCells = [
    {
        id: 'lName',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'rank',
        numeric: false,
        disablePadding: false,
        label: 'Grade',
    },
    {
        id: 'dob',
        numeric: false,
        disablePadding: false,
        label: 'Date of Birth',
    },
    {
        id: 'dateSubmitted',
        numeric: false,
        disablePadding: false,
        label: 'Date Submitted',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status of Application',
    },
];

function EnhancedTableHead(props) {
    const {order, orderBy, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function ReviewerList({setShowList, setCurrentApplicationId, applicants, setApplicants, setFilteredApplications, filteredApplications}) {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('lName');
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // const [applicants, setApplicants] = useState([]);
    // const [filteredApplications, setFilteredApplications] = useState([]);

    //const {numSelected} = props;
    const [showModal, setShowModal] = useState(false);

    const handleFilter = () => {
        setShowModal(true);
    }

    const [showPending, setShowPending] = useState(true);
    const [showApproved, setShowApproved] = useState(true);
    const [showDenied, setShowDenied] = useState(true);

    const filterResults =  (event, checked) => {
        //needed because of state batching
        let pendingChecked = showPending;
        let approvedChecked = showApproved;
        let deniedChecked = showDenied;

        switch (event.target.id) {
            case "chkPending":
                 setShowPending(checked);
                 pendingChecked = checked;
                break;
            case "chkApproved":
                 setShowApproved(checked);
                approvedChecked = checked;
                break;
            case "chkDenied":
                 setShowDenied(checked);
                deniedChecked = checked;
                break;
            default:
                // should not get here
        }

        if(!deniedChecked || !approvedChecked || !pendingChecked) {
            const filteredResults = applicants.filter(applicant => {
                switch (applicant.status) {
                    case "pending":
                        return pendingChecked;
                    case "approved":
                        return approvedChecked;
                    case "denied":
                        return deniedChecked;
                    default:
                        return false;
                }
            });

            setFilteredApplications(filteredResults);
        } else {
            // All boxes checked so show all
            setFilteredApplications(applicants);
        }
    }

    // useEffect(() => {
    //     getApplications();
    // }, []);
    //
    // const getApplications = async () => {
    //     const response = await apiCall('application', 'list');
    //     await setApplicants(response.apiData);
    //     await setFilteredApplications(response.apiData);
    // }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event, id) => {
        setShowList(false);
        setCurrentApplicationId(id);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickFilter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseFilter = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - applicants.length) : 0;

    return (
        <>
            <Box sx={{width: '100%'}}>
                <Paper
                    variant="outlined"
                    sx={{width: '100%', my: 2, p: 2, boxShadow: 20}}>
                    <Toolbar
                        sx={{
                            pl: {sm: 2},
                            pr: {xs: 1, sm: 1},
                            ...(0 > 0 && {
                                bgcolor: (theme) =>
                                    alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                            }),
                        }}
                    >
                        <Typography
                            sx={{flex: '1 1 100%'}}
                            variant="h6"
                            id="tableTitle"
                            component="div"
                        >
                            Applications
                        </Typography>
                        <div>
                            <IconButton aria-describedby={id} variant="contained" onClick={handleClickFilter}>
                                        <FilterListIcon/>
                                        Filter
                            </IconButton>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleCloseFilter}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                sx={{
                                    // ml: -10
                                }}
                            >
                                <br/>
                                    <Typography component={"span"} variant={"h6"} sx={{p:3}}>Filter Applications by:</Typography>

                                    <FormGroup sx={{p:2}}>
                                        <FormControlLabel control={<Checkbox id={"chkPending"} onChange={(event, checked) => filterResults(event, checked)} checked={showPending} />} label="Pending"/>
                                        <FormControlLabel control={<Checkbox id={"chkApproved"} onChange={(event, checked) => filterResults(event, checked)} checked={showApproved} />} label="Approved"/>
                                        <FormControlLabel control={<Checkbox id={"chkDenied"} onChange={(event, checked) => filterResults(event, checked)} checked={showDenied} />} label="Denied"/>
                                    </FormGroup>
                            </Popover>
                        </div>


                    </Toolbar>

                    <TableContainer>
                        <Table
                            sx={{minWidth: 750}}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={applicants?.length ?? 0}
                            />
                            <TableBody>
                                {filteredApplications ? filteredApplications.slice().sort(getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                tabIndex={-1}
                                                key={row.id}>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    {row.fName + " " + row.mI + " " + row.lName}
                                                </TableCell>
                                                <TableCell align="left">{row.rank}</TableCell>
                                                <TableCell align="left">{row.dob}</TableCell>
                                                <TableCell align="left">{row.dateSubmitted}</TableCell>
                                                <TableCell align="left">{row.status}</TableCell>
                                            </TableRow>
                                        );
                                    }) : []}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={applicants?.length ?? 0}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    <FormControlLabel
                        control={<Switch checked={dense} onChange={handleChangeDense}/>}
                        label="Dense padding"
                    />
                </Paper>
            </Box>
            <br/>
            <br/>
            <br/>
            <br/>


            {/*<AppModal showModal={showModal} setShowModal={setShowModal} styles={filterStyle} >*/}
            {/*    <Typography component={"span"} variant={"h6"} pr={2}>Filter All Applications by:</Typography>*/}
            {/*    <Button variant={"contained"} size={"small"} onClick={() => setShowModal(false)} endIcon={<CloseIcon />}>Close</Button>*/}

            {/*    <FormGroup>*/}
            {/*        <FormControlLabel control={<Checkbox id={"chkPending"} onChange={(event, checked) => filterResults(event, checked)} checked={showPending} />} label="Pending"/>*/}
            {/*        <FormControlLabel control={<Checkbox id={"chkApproved"} onChange={(event, checked) => filterResults(event, checked)} checked={showApproved} />} label="Approved"/>*/}
            {/*        <FormControlLabel control={<Checkbox id={"chkDenied"} onChange={(event, checked) => filterResults(event, checked)} checked={showDenied} />} label="Denied"/>*/}
            {/*    </FormGroup>*/}
            {/*</AppModal>*/}
        </>
    );
}